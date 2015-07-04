/**
 * Created by Eric on 2015/3/23.
 */
import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend(Ember.Evented,{
  showErrors: false,
  showRegisterErrors: false,
  init: function(){
    this.loadMessages();
    var self = this;
    setInterval(function() {self.loadMessages()}, 30*1000);

    //this.session.unreadMessages.reload();

    this.set('newAccount',this.store.createRecord('profile/account'));
    this.set('forgotPassword',this.store.createRecord('profile/forgot-password'));

  },
  loadMessages: function(){
    if (!Ember.isEmpty(this.session.get('id'))) {
      var messages = this.store.find('inbox/message', {page: 1, size: 10, status: "unread"});

      messages.then(res => {
        this.session.set("unreadMessages.totalCount", res.get("meta.totalCount"));
      });

      this.session.set("unreadMessages", messages);

    }
  },
  actions: {
    authenticate: function () {
      var _this = this;
      var credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', credentials).then(function(){
        _this.loadMessages();

        _this.trigger('closeModalBox');
      },function(error){
        _this.set("showErrors", true);
        _this.set("loginErrors", error.errors[0].message);
        //Notify.error(error.errors[0].message);
      });
    },
    invalidateSession: function () {
      this.get('session').invalidate();
    },
    register: function(){
      //this.transitionToRoute('register');

      var _this = this;
      if (this.get('newAccount.isValid')) {
        var promise = this.get("newAccount").save();
        promise.then(function () {
          var credentials = {
            identification: _this.get('newAccount.email'),
            password: _this.get('newAccount.password')
          };
          //var credentials = _this.getProperties('identification', 'password');
          _this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', credentials);

          _this.trigger('closeModalBox');
        }, function(error) {
          var jsonErrors = Ember.$.parseJSON(error.responseText)["errors"];
          _this.set("showRegisterErrors", true);
          _this.set("registerErrors", jsonErrors[0].message);
          //Notify.error(jsonErrors[0]);
        });
      }
      else {
        this.set('showRegisterErrors', true);
        //Notify.error("当前数据验证错误，请检查错误后再进行尝试!");
      }
    },
    sendEmail: function(){
      if (this.get('forgotPassword.isValid')) {
        this.get("forgotPassword").save().then(res => {
          this.set("forgotPassword.email", null);
          Notify.info("An email for password reset had been sent");
        }, function(){
          Ember.Logger.error("保存时发生错误。");
        });
      }
      else{
        Notify.error("Email is blank or not right");
      }
    },
    //dropdownUser: function (){
    //  $('.dropdown-user-profile').stop(true).fadeIn();
    //},
    listing: function(){
      this.transitionToRoute('house.add');
    }
  }
});
