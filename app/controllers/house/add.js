import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    save:function(type){
      this.get("model").set("rentType", type);
      this.get("model").save().then($.proxy(function(house) {
        this.transitionToRoute('house.manage', house.get('id'));
      }, this), function() {
        Ember.Logger.error("保存房源时发生错误。");
      });
    }
  }
});
