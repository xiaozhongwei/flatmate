import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var listing_id = params['listing_id'];
    return this.store.fetchById('listing', listing_id);
  },
  setupController: function(controller, model){
    this._super(controller, model);

    controller.set('currentUser', this.session.get("user"));

    var payCycleMapping = [];

    if(!Ember.isEmpty(model.get('payments'))){
      model.get("payments").forEach(function(payment){
        var text =  payment.get("cycle") + " month";
        if(payment.get("cycle") > 1){
          text =  payment.get("cycle") + " months";
        }
        payCycleMapping.push({id: payment.get("cycle"), text: text});
      });

      controller.set("currentPayCycle", model.get('payments.lastObject.cycle'));
      controller.set("currentPrice", model.get('payments.lastObject.price'));

    }

    //if(!Ember.isEmpty(model.get('perMonthPrice'))){
    //
    //  payCycleMapping.push({id: 1, text: "1 month"});
    //}
    //if(!Ember.isEmpty(model.get('perThreeMonthPrice'))){
    //  payCycleMapping.push({id: 3, text: "3 months"});
    //}
    //if(!Ember.isEmpty(model.get('perSixMonthPrice'))){
    //
    //  payCycleMapping.push({id: 6, text: "6 months"});
    //}
    //if(!Ember.isEmpty(model.get('perYearPrice'))){
    //
    //  payCycleMapping.push({id: 1, text: "12 months"});
    //}

    controller.set("payCycleMapping", payCycleMapping);

    if(Ember.isEmpty(model.get('house.amenities'))){
      model.set('house.amenities',Ember.A());
    }

    if(Ember.isEmpty(model.get('features'))){
      model.set('features',Ember.A());
    }
  }
});
