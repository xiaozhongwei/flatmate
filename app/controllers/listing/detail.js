import Ember from 'ember';
import Notify from 'ember-notify';
import ajax from 'ic-ajax';
import config from 'flatmate/config/environment';
import AmenityMapping from 'flatmate/transforms/amenity';
import FeatureMapping from 'flatmate/transforms/feature';

export default Ember.Controller.extend({
  isShowingModal: false,
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

      var promise = ajax({
        url: config.host + "/" + config.apiRoot + '/profile/wishlists/add', type: 'post', data:JSON.stringify(data),
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
      if(this.session.get("isAuthenticated")){
        //if(Ember.isEmpty(this.get("currentMessage"))){
        var message = this.store.createRecord("inbox/messageRecord",{listingId: this.get('model.id'),listingTitle: this.get('model.title'),
          sender: this.get('currentUser.id'), senderName: this.get('currentUser.firstName'),senderPhoto: this.get('currentUser.logo.downloadFilePath'),
          receiver: this.get('model.creatorId'),receiverName: this.get('model.creatorName'),receiverPhoto: this.get('model.creatorPhoto')});
        this.set('currentMessage',message);
        //}

        this.showModal('listing.message');
      }
      else{
        Notify.error('please login first');
      }
    },
    closeDialog: function(){
      this.get('modal').hide();

    },
    sendMessage:function(){
      var promise = this.get('currentMessage').save();
      promise.then(res => {
        this.get('modal').hide();
        Notify.info('send message success');
      });
    }
  },

  amenityMapping: AmenityMapping.create({}).get("mapping"),
  featureMapping: FeatureMapping.create({}).get("mapping")
});
