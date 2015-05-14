import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var listing_id = params['listing_id'];
    return this.store.fetchById('listing', listing_id);
  },
  setupController: function(controller, model){
    this._super(controller, model);

    controller.set('currentUser', this.session.get("user"));

    if(!Ember.isEmpty(model.get('perYearPrice'))){
      controller.set("currentPayCycle", "perYear");
      controller.set("currentPrice", model.get('perYearPrice'));
    }
    else if(!Ember.isEmpty(model.get('perSixMonthPrice'))){
      controller.set("currentPayCycle", "perSixMonth");
      controller.set("currentPrice", model.get('perSixMonthPrice'));
    }
    else if(!Ember.isEmpty(model.get('perThreeMonthPrice'))){
      controller.set("currentPayCycle", "perThreeMonth");
      controller.set("currentPrice", model.get('perThreeMonthPrice'));
    }
    else {
      controller.set("currentPayCycle", "perMonth");
      controller.set("currentPrice", model.get('perMonthPrice'));
    }

    if(Ember.isEmpty(model.get('house.amenities'))){
      model.set('house.amenities',Ember.A());
    }

    if(Ember.isEmpty(model.get('features'))){
      model.set('features',Ember.A());
    }
  }
});
