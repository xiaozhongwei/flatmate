import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  actions: {
    sendEmail: function(){
      if (this.get('model.isValid')) {
        this.get("model").save().then(res => {
          this.set("model.email", null);
          Notify.info("An email for password reset had been sent");
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
