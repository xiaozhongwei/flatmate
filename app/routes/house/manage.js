import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var house_id = params['house_id'];
    return this.store.find('listing/house', house_id);
  },
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    if(Ember.isEmpty(model.get('amenities'))){
      model.set('amenities',Ember.A());
    }
  }
});
