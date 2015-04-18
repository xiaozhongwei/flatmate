import Ember from 'ember';
import ajax from 'ic-ajax';

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
      queryParams.page = 1;
      this.transitionToRoute({queryParams});
    },
    toggleHouse: function(house){
      house.toggleProperty('isExpand')
    },
    manageHouse: function(house){
      this.transitionToRoute('house.manage', house.get('id'));
    },
    publishListing: function(listing){
      var data = {
        "listingStatus":{
          id: listing.get("id"),
          status: 1
        }
      };

      var promise = ajax({url: 'listing/updateStatus', type: 'post', data:JSON.stringify(data),
        contentType: 'application/json; charset=utf-8'});
      promise['then'](function() {
        listing.set('status',1);
        Notify.info('房源发布成功');
      });
      promise['catch'](function(error) {

      });
    },
    unPublishListing: function(listing){
      var data = {
        "listingStatus":{
          id: listing.get("id"),
          status: 0
        }
      };

      var promise = ajax({url: 'listing/updateStatus', type: 'post', data:JSON.stringify(data),
        contentType: 'application/json; charset=utf-8'});
      promise['then'](function() {
        listing.set('status',0);
        Notify.info('房源已取消发布');
      });
      promise['catch'](function(error) {

      });
    }
  }
});
