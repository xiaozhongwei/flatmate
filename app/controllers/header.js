/**
 * Created by Eric on 2015/3/23.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function () {
      var _this = this;
      var credentials = this.getProperties('identification', 'password');
      var promise = this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', credentials);
      promise.then(function () {
        //var userId = _this.get("session.content.id");
        //_this.store.find('profile/user', userId).then(function(user){
        //  _this.get('session').set("user",user);
        //});

        //_this.get('session').set("user",_this.store.find('profile/user', userId));
      });
    },
    invalidateSession: function () {
      this.get('session').invalidate();
    }
  }
});
