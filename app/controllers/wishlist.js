import Ember from 'ember';
import ajax from 'ic-ajax';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  actions:{
    removeWishlisting: function(listing, wishlist){
      var data = {
        "profile/wishlist":{
          id: wishlist.get("id"),
          listings: [{id: listing.get("id")}]
        }
      };

      var promise = ajax({url: 'api/profile/wishlists/remove', type: 'post', data:JSON.stringify(data),
        contentType: 'application/json; charset=utf-8'});
      promise['then'](function() {
        wishlist.get('listings').removeRecord(listing);
        Notify.info('已删除');
      });
      promise['catch'](function(error) {
        Notify.error('删除失败');
      });
    }
  }
});
