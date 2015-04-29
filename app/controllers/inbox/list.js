import Ember from 'ember';

export default Ember.Controller.extend({
  _profileTitle:"My Messages",
  queryParams: [ "page", "size", "status"],
  page: 1,
  size: 10,
  status: 'All',
  actions: {
    queryMessage: function (value) {
      var queryParams = {};
      queryParams.status = value;
      queryParams.page = 1;
      this.transitionToRoute({queryParams});
    }
  }
});
