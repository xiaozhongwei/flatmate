/**
 * Created by Eric on 2015/3/23.
 */
import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend(Ember.Evented,{
  init: function(){
    this.loadMessages();
    var self = this;
    setInterval(function() {self.loadMessages()}, 30*1000);

    //this.session.unreadMessages.reload();

    this.set('newAccount',this.store.createRecord('profile/account'));

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
            identification: _this.get('model.email'),
            password: _this.get('model.password')
          };
          _this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', credentials);

          _this.trigger('closeModalBox');
        });
      }
      else {
        Notify.error("当前数据验证错误，请检查错误后再进行尝试!");

      }
    },
    dropdownUser: function (){
      $('.dropdown-user-profile').stop(true).fadeIn();
    },
    listing: function(){
      this.transitionToRoute('house.add');
    }
  }
});
