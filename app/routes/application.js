import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import ApplicationRouteModalsMixin from 'ember-modals/mixins/routes/application';

export default Ember.Route.extend(ApplicationRouteMixin,ApplicationRouteModalsMixin,{
});
