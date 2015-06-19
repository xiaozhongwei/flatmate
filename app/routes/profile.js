import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  setupController: function (controller, model) {
    controller.set("moduleName", 'PROFILE');

    this._super(controller, model);
  }
});
