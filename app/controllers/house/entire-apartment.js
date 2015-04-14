import Ember from 'ember';

export default Ember.Controller.extend({
  step: 1,
  actions: {
    changeStep: function(step){
      this.set('step', step);
    }
  }
});
