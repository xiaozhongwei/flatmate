import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.createRecord('profile/reset-password',{userId: params.userId,
      token: params.token, email: params.email});
  }
});
