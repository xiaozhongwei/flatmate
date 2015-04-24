import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var listing_id = params['listing_id'];
    return this.store.find('listing', listing_id);
  },
  setupController: function(controller, model){
    this._super(controller, model);

    controller.set('currentUser', this.session.get("user"));
  }
});
