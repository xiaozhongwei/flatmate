import Ember from 'ember';

export default Ember.Controller.extend({
  _profileTitle:"Listings",
  queryParams: [ "page", "size", "status"],
  page: 1,
  size: 10,
  status: 'All',
  actions: {
    queryHouse: function(value){
      var queryParams = {};
      queryParams.status = value;
      this.transitionToRoute({queryParams});
    },
    saveHouse: function(){

    }
  }
});
