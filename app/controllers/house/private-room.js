import Ember from 'ember';

export default Ember.Controller.extend({
  activeType: "apt", //apt or flatmate or room
  step: 1,
  init: function(){
    if(!Ember.isEmpty(this.get("model.activeId"))){
      this.set("activeType","room");
    }
  },
  actions: {
    changeStep: function(step){
      this.set('step', step);
    },
    changeActive: function(activeType,activeId){
      this.set("activeType",activeType);
      this.set("model.activeId",activeId);

      this.set('step', 1);
    },
    save: function(model){
      model.save();

      var currentStep = this.get("step");
      this.set("step",(currentStep + 1));
    }
  }
});
