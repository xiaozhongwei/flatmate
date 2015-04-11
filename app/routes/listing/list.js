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
    occupation: {refreshModel: true}
  },
  resetController: function (controller, isExiting, transition) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('userId', null);
      controller.set('page', 1);
      controller.set('size', 10);
      controller.set('area', "all");
      controller.set('rentType', "all");
      controller.set('subwayLine', "all");
      controller.set('country', null);
      controller.set('occupation', "all");
      controller.set('price', null);
    }
  },
  model: function(params){
    return this.store.find('listing', params);
  },
  setupController: function (controller, model) {
    controller.set("totalPage", model.get("meta.totalPage"));  //页数
    controller.set("totalCount", model.get("meta.totalCount")); //项数
    controller.set("currentListing",model.get('firstObject'));

    this._super(controller, model);
  }
});
