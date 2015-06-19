import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.createRecord('listing/house');
  },
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    if(Ember.isEmpty(model.get('amenities'))){
      model.set('amenities',Ember.A());
    }
  }
});
