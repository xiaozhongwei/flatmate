import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    confirm: function() {
      this.showModal('confirm-choice');
    }
  }
});
