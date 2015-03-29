import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    area: {
      refreshModel: true
    },
    subwayLine: {
      refreshModel: true
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
