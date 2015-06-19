import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var userId = params['listing.landlord_id'];
    return this.store.find('listing/landlord',userId);
  }
});
