import Ember from 'ember';
import ajax from 'ic-ajax';
import ListingStatusMapping from 'flatmate/transforms/listing-status';

export default Ember.Controller.extend({
  _profileTitle:"Listings",
  queryParams: [ "page", "size", "status"],
  page: 1,
  size: 10,
  status: 'All',
  //listingObverse: function(){
  //  alert(10);
  //}.observes("model.@listings"),
  actions: {
    queryHouse: function(value){
      var queryParams = {};
      queryParams.status = value;
      queryParams.page = 1;
      this.transitionToRoute({queryParams});
    },
    toggleHouse: function(house){
      house.toggleProperty('isExpand')
    },
    manageHouse: function(house){
      this.transitionToRoute('house.manage', house.get('id'));
    }

  },

  listingStatusMapping: ListingStatusMapping.create({}).get("mapping")
});
