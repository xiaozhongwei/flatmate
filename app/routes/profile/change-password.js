import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.session.get("user");
  },
  setupController: function(controller, model) {
    this._super(controller, model);

    controller.set("passwordModel", this.store.createRecord('profile/changePassword'));


  }
});
