import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("listing", {path: '/listing'}, function () {
    this.route("list", { path: "/list" });
    this.route('detail');
  });
  this.resource("profile", {path: '/profile'}, function () {
    this.route("dashboard", { path: "/dashboard" });

  });
});

export default Router;
