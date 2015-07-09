import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {refreshModel: true},
    rentType: {refreshModel: true},
    area: {refreshModel: true},
    subwayLine: {refreshModel: true},
    price: {refreshModel: true},
    country: {refreshModel: true},
    gender: {refreshModel: true},
    occupation: {refreshModel: true},
    bedrooms: {refreshModel: true},
    availableDate: {refreshModel: true},
    address: {refreshModel: true}
  },
  resetController: function (controller, isExiting, transition) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('userId', null);
      controller.set('page', 1);
      controller.set('size', 10);
      controller.set('area', undefined);
      controller.set('rentType', "all");
      controller.set('subwayLine', undefined);
      controller.set('country', undefined);
      controller.set('occupation', "all");
      controller.set('price', undefined);
      controller.set('bedrooms', undefined);
      controller.set('availableDate', 'all');
      controller.set('address', undefined);
    }
  },
  beforeModel: function(transition) {
    if (!this.get('session.isAuthenticated')) {
      this.set('session.attemptedTransition', transition);
    }
  },
  model: function(params){
    return this.store.find('listing', params);
  },
  setupController: function (controller, model) {
    if(!Ember.isEmpty(model))
      controller.set("currentListing",model.get('firstObject'));

    controller.set("totalPage", model.get("meta.totalPage"));  //页数
    controller.set("totalCount", model.get("meta.totalCount")); //项数

    this._super(controller, model);
  }
});
