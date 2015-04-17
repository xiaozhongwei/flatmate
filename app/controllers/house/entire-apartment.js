import Ember from 'ember';


export default Ember.Controller.extend({
  step: 2,
  actions: {
    changeStep: function(step){
      this.set('step', step);
    },
    save: function(model){
      model.save();

      var currentStep = this.get("step");
      this.set("step",(currentStep + 1));
    }
  }
});
