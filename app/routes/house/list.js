import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    status: {
      refreshModel: true
    }
  },
  model: function(params){
    return this.store.find('listing/house', params);
  },
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    this.store.find('listing/statistic').then(function(statistics){
      controller.set("statistics", statistics);
    });

    controller.set("totalPage", model.get("meta.totalPage"));  //页数
    controller.set("totalCount", model.get("meta.totalCount")); //项数
  }
});
