/**
 * Created by Eric on 2015/3/23.
 */
import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    authenticate: function () {
      var credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('simple-auth-authenticator:oauth2-password-grant', credentials);
    },
    invalidateSession: function () {
      this.get('session').invalidate();
    },
    register: function(){
      alert(12);
      this.transitionToRoute('register');
    }
  }
});
