import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    confirm: function() {
      this.showModal('confirm-choice');
    }
  }
});
