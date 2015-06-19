import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    status: {
      refreshModel: true
    },
    type: {
      refreshModel: true
    },
    area: {
      refreshModel: true
    },
    roomStatus: {
      refreshModel: true
    }
  },
  resetController: function (controller, isExiting, transition) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('page', 1);
      controller.set('status', 'All');
      controller.set('type', 'entire');
      controller.set('area', undefined);
      controller.set('roomStatus', undefined);
    }
  },
  model: function(params){
    return this.store.find('listing/house', params);
  },
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    controller.set("moduleName", 'LISTING');

    if(!Ember.isEmpty(model)){
      model.setEach('isExpand', true);

      //model.get('firstObject').set('isExpand', true);
    }

    var userId = this.get("session.id");
    this.store.find('listing/statistic',userId).then(function(statistic){
      controller.set("statistic", statistic);
    });

    //this.store.find('listing/statistic').then(function(statistics){
    //  controller.set("statistics", statistics);
    //});

    this.store.find('common/area').then(function(areas){
      controller.set("areas", areas);
    });

    controller.set("totalPage", model.get("meta.totalPage"));  //页数
    controller.set("totalCount", model.get("meta.totalCount")); //项数
  }
});
