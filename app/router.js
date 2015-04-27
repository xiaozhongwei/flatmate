import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');

  this.resource("listing", {path: '/listing'}, function () {
    this.route("list", { path: "/list" });
    this.route('detail', { path: "/detail/:listing_id" });
    this.route('book');
  });
  this.resource("profile", {path: '/profile'}, function () {
    this.route("dashboard", { path: "/dashboard" });
    this.route('change-password');
    this.route('photo');
    this.route('edit-profile');
    this.route('view');
  });

  this.route('inbox', function() {
    this.route('list');
    this.route('detail', { path: "/detail/:message_id" });
  });

  this.route('house', function() {
    this.route('list');
    this.route('add');
    this.route('manage',{path: "/manage/:house_id"});
  });
  this.route('wishlist');
  this.route('register');
  this.route('forgot-password');
});

export default Router;
