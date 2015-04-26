import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    register: function(){
      var _this = this;
      var promise = this.get("model").save();
      promise.then(function () {
        var credentials = _this.getProperties('email', 'password');
        _this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', credentials);
      });
    }
  }
});
