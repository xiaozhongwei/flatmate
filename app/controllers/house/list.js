import Ember from 'ember';

export default Ember.Controller.extend({
  _profileTitle:"Listings",
  queryParams: [ "page", "size", "status"],
  page: 1,
  size: 10,
  status: 'all',
  actions: {
    saveHouse: function(){

    }
  }
});
