import Ember from 'ember';
import Notify from 'ember-notify';
import ajax from 'ic-ajax';
import config from 'flatmate/config/environment';
import AmenityMapping from 'flatmate/transforms/amenity';
import FeatureMapping from 'flatmate/transforms/feature';
import MonthMapping from 'flatmate/transforms/month';
import GuestNumberMapping from 'flatmate/transforms/guest-number';

export default Ember.Controller.extend(Ember.Evented,{
  needs: ['application'],
  isShowingModal: false,
  payCycle: function(){
    if(!Ember.isEmpty(this.get("currentMessage.payCycle"))){
      if(this.get("currentMessage.payCycle")===3){
        this.set("currentMessage.price", this.get("model.perThreeMonthPrice"));
      }
      else if(this.get("currentMessage.payCycle")===6){
        this.set("currentMessage.price", this.get("model.perSixMonthPrice"));
      }
      else if(this.get("currentMessage.payCycle")===1){
        this.set("currentMessage.price", this.get("model.perMonthPrice"));
      }
      else if(this.get("currentMessage.payCycle")===12){
        this.set("currentMessage.price", this.get("model.perYearPrice"));
      }
    }
  }.observes("currentMessage.payCycle").on("change"),
  addWishlisting: function(listing){
    var _this = this;
    var data = {
      "profile/wishlist":{
        //id: listing.get("wishlist"),
        listings: [{id: listing.get("id")}]
      }
    };

    var promise = ajax({
      url: config.host + "/" + config.apiRoot + '/profile/wishlists/add', type: 'post', data:JSON.stringify(data),
      contentType: 'application/json; charset=utf-8'});
    promise['then'](function(result) {
      //alert(result["profile/wishlist"].id);
      listing.set("wishlist", result["profile/wishlist"].id);
      Notify.info('add wishlist success');
    });
    promise['catch'](function(error) {
      Notify.error('add wishlist failed');
    });
  },
  removeWishlisting: function(listing){
    var data = {
      "profile/wishlist":{
        id: listing.get("wishlist"),
        listings: [{id: listing.get("id")}]
      }
    };

    var promise = ajax({url:
    config.host + "/" + config.apiRoot + '/profile/wishlists/remove', type: 'post', data:JSON.stringify(data),
      contentType: 'application/json; charset=utf-8'});
    promise['then'](function() {
      //wishlist.get('listings').removeObject(listing);
      listing.set('wishlist', undefined);
      Notify.info('delete successfully');
    });
    promise['catch'](function(error) {
      Notify.error('delete failed');
    });
  },
  actions:{
    changePrice: function(cycle,price){
      if(!Ember.isEmpty(price)){
        this.set("currentPayCycle", cycle);
        this.set("currentPrice",price);
      }
    },
    updateWishlist: function(listing){
      if(Ember.isEmpty(listing.get('wishlist')))
        this.addWishlisting(listing);
      else
        this.removeWishlisting(listing);
    },
    showDialog:function(){
      if(this.session.get("isAuthenticated")){
        //if(Ember.isEmpty(this.get("currentMessage"))){
        var message = this.store.createRecord("inbox/messageRecord",{listingId: this.get('model.id'),listingTitle: this.get('model.title'),
          sender: this.get('currentUser.id'), senderName: this.get('currentUser.firstName'),senderPhoto: this.get('currentUser.logo.downloadFilePath'),
          receiver: this.get('model.creatorId'),receiverName: this.get('model.creatorName'),receiverPhoto: this.get('model.creatorPhoto'),
        });

        this.set('currentMessage',message);

        //this.showModal('listing.message');
        this.trigger('openInquiryBox');
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
        //this.get('modal').hide();
        this.get("controllers.application").send("closeModalBox");
        Notify.info('send message success');
      });
    }
  },

  amenityMapping: AmenityMapping.create({}).get("mapping"),
  featureMapping: FeatureMapping.create({}).get("mapping"),
  monthMapping: MonthMapping.create({}).get("mapping"),
  guestMapping: GuestNumberMapping.create({}).get("mapping")
});
