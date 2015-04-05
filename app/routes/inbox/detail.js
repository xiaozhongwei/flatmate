import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var message_id = params['message_id'];
    return this.store.fetchById('inbox/message', message_id);
  },
  setupController: function (controller, model) {
    // Call _super for default behavior
    this._super(controller, model);

    var userId = this.session.get("id");
    controller.set("currentUser", this.session.get("user"));

    if(!Ember.isEmpty(model)){
      //获取wanted listing 信息
      this.store.find("listing", model.get("listingId")).then($.proxy(function(listing) {
        controller.set("listing", listing);
      }, this), function() {
        Ember.Logger.error("获取房源信息失败。");
      });

      if(!Ember.isEmpty(model.get("records"))){
        model.get("records").forEach(function(record){
          if(record.get("sender") === userId){
            record.set("isSender", true)
          }
        })
      }
    }


  }
});
