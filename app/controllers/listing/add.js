import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    save:function(model){
      model.save().then($.proxy(function(house) {

        this.transitionToRoute('listing.manage', house.get('id'));

      }, this), function() {
        Ember.Logger.error("保存房源时发生错误。");
      });
    }
  }
});
