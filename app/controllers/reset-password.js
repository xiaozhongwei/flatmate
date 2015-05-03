import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['userId','token'],
  userId: null,
  token: null,
  actions: {
    resetPassword: function(){
      if (this.get('model.isValid')) {
        this.get("model").save().then(res => {
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
