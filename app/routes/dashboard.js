import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  model: function(params){
    //return this.store.find('profile/wishlist',$.extend({userId: this.session.get('id')},params));
  },
  setupController: function (controller, model) {
    controller.set("moduleName", 'DASHBOARD');

    this._super(controller, model);
  }
});
