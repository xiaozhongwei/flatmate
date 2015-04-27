import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var listing_id = params['listing_id'];
    return this.store.find('listing', listing_id);
  },
  setupController: function(controller, model){
    this._super(controller, model);

    controller.set('currentUser', this.session.get("user"));

    if(Ember.isEmpty(model.get('house.amenities'))){
      model.set('house.amenities',Ember.A());
    }

    if(Ember.isEmpty(model.get('features'))){
      model.set('features',Ember.A());
    }
  }
});
