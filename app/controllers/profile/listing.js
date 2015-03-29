import Ember from 'ember';

export default Ember.Controller.extend({
  _profileTitle:"Listings",
  queryParams: [ "page", "size"],
  page: 1,
  size: 10,
  actions: {
    saveHouse: function(){

    }
  }
});
