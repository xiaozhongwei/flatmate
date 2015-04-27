import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  actions:{
    register: function(){
      var _this = this;
      if (this.get('model.isValid')) {
        var promise = this.get("model").save();
        promise.then(function () {
          var credentials = _this.getProperties('email', 'password');
          _this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', credentials);
        });
      }
      else {
        Notify.error("当前数据验证错误，请检查错误后再进行尝试!");
      }
    }
  }
});
