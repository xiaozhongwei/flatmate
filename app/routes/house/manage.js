import Ember from 'ember';

export default Ember.Route.extend({
  resetController: function (controller, isExiting, transition) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('activeId', null);
    }
  },
  model: function(params){
    var house_id = params['house_id'];
    return this.store.fetchById('listing/house', house_id);
  },
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    if(Ember.isEmpty(model.get('amenities'))){
      model.set('amenities',Ember.A());
    }
  }
});
