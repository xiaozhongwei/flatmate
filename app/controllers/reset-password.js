import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  queryParams: ['userId','token','email'],
  userId: null,
  token: null,
  emali: null,
  actions: {
    resetPassword: function(){
      if (this.get('model.isValid')) {
        this.get("model").save().then(res => {
          var credentials = {
            identification: this.get('model.email'),
            password: this.get('model.password')
          };
          this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', credentials);
          //this.set("model.password", null);
          //Notify.info("An email for password reset had been sent");
        }, function(){
          Ember.Logger.error("保存时发生错误。");
        });
      }
      else{
        Notify.error("Email is blank or not right");
      }
    }
  }
});
