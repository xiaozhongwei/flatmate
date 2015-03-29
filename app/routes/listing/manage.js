import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var house_id = params['house_id'];
    return this.store.find('listing/house', house_id);
  }
});
