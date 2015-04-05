import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model: function(params){
    return this.store.find('inbox/message',params);
  },
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    controller.set("currentUser", this.session.get("user"));

    controller.set("totalPage", model.get("meta.totalPage"));  //页数
    controller.set("totalCount", model.get("meta.totalCount")); //项数
  }
});
