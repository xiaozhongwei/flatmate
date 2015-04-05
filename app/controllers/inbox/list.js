import Ember from 'ember';

export default Ember.Controller.extend({
  _profileTitle:"My Messages",
  queryParams: [ "page", "size"],
  page: 1,
  size: 10
});
