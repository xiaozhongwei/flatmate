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
  resetController: function (controller, isExiting, transition) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('page', 1);
    }
  },
  model: function(params){
    return this.store.find('inbox/message',params);
  },
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    controller.set("currentUser", this.session.get("user"));

    this.store.find('inbox/statistic').then(function(statistics){
      controller.set("statistics", statistics);
    });

    controller.set("totalPage", model.get("meta.totalPage"));  //页数
    controller.set("totalCount", model.get("meta.totalCount")); //项数
  }
});
