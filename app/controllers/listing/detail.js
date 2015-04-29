import Ember from 'ember';
import AmenityMapping from 'flatmate/transforms/amenity';
import FeatureMapping from 'flatmate/transforms/feature';

export default Ember.Controller.extend({
  actions:{
    changePrice: function(cycle,price){
      this.set("currentPayCycle", cycle);
      this.set("currentPrice",price);
    },
    addWishlisting: function(listing){
      var data = {
        "profile/wishlist":{
          //id: listing.get("wishlist"),
          listings: [{id: listing.get("id")}]
        }
      };

      var promise = ajax({url: 'api/profile/wishlists/add', type: 'post', data:JSON.stringify(data),
        contentType: 'application/json; charset=utf-8'});
      promise['then'](function() {
        //listing.set("wishlist", );
        Notify.info('add wishlist success');
      });
      promise['catch'](function(error) {
        Notify.error('add wishlist failed');
      });
    },
    showDialog:function(){
      this.showModal('listing.message');

    },
    cancel: function(){
      this.get('modal').close();
    },
    sendMessage:function(){
      var message = this.store.createRecord("inbox/messageRecord",{listingId: this.get('model.id'),listingTitle: this.get('model.title'),
        sender: this.get('currentUser.id'), senderName: this.get('currentUser.firstName'),senderPhoto: this.get('currentUser.logo.downloadFilePath'),
        receiver: this.get('model.creatorId'),receiverName: this.get('model.creatorName'),receiverPhoto: this.get('model.creatorPhoto'),
        content: 'Can I visit the room first?'});
      this.set('currentMessage',message);
      var promise = this.get('currentMessage').save();
      promise.then(function() {
        this.get('modal').close();
      });
    }
  },

  amenityMapping: AmenityMapping.create({}).get("mapping"),
  featureMapping: FeatureMapping.create({}).get("mapping")
});
