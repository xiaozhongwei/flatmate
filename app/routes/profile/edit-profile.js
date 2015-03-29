import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.session.get("user");
    //return this.store.find('profile/user', "1234");
  }
});
