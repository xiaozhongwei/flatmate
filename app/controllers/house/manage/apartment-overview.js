import Ember from 'ember';
import PaymentMapping from 'flatmate/transforms/payment-cycle';
import AreaMapping from 'flatmate/transforms/area';
import CompoundMapping from 'flatmate/transforms/compound';
import StationMapping from 'flatmate/transforms/metro-station';
import BuildingMapping from 'flatmate/transforms/building';
import FloorMapping from 'flatmate/transforms/floor';
import RoomNumberMapping from 'flatmate/transforms/room-number';
import AmenityMapping from 'flatmate/transforms/amenity';

export default Ember.Controller.extend({
  //flatmatesObserve: function(){
  //  if(this.get('model.isShared')){
  //    // 变更flatmates：如果bedrooms数大于flatmates长度，添加flatmate；如果bedrooms数小于flatmates长度，从后向前删减flatmate
  //    var flatmatesLength = this.get('model.flatmates.length'),
  //      bedrooms = this.get('model.bedrooms');
  //    if(!Ember.isEmpty(bedrooms)){
  //      if(flatmatesLength < bedrooms){
  //        for(var i = flatmatesLength; i < bedrooms; i++){
  //          var flatmate = this.store.createRecord('listing/flatmate',{index: i, status: '1'});
  //          if(i===0)
  //            flatmate.set("status", 0);
  //          this.get('model.flatmates').pushObject(flatmate);
  //        }
  //      }
  //      else if(flatmatesLength > bedrooms){
  //        for(var i = flatmatesLength; i > bedrooms; i--){
  //          var flatmate = this.get('model.flatmates.lastObject');
  //          this.get('model.flatmates').removeObject(flatmate);
  //        }
  //      }
  //    }
  //
  //  }
  //}.observes('model.bedrooms'),
  actions: {
    addPayment: function(listing){
      listing.get('payments').createFragment({
        cycle: undefined,
        price: undefined
      });
    },
    removePayment: function(listing, payment){
      listing.get('payments').removeFragment(payment);
    }
  },

  willDestroy: function(){
    if(this.get("model.isDirty") || this.get("model.listings.firstObject.isDirty")){
      this.get("model").save().then();
    }
  },

  paymentMapping: PaymentMapping.create({}).get("mapping"),
  areaMapping: AreaMapping.create({}).get("mapping"),
  compoundMapping: CompoundMapping.create({}).get("mapping"),
  stationMapping: StationMapping.create({}).get("mapping"),
  buildingMapping: BuildingMapping.create({}).get("mapping"),
  floorMapping: FloorMapping.create({}).get("mapping"),
  roomNumberMapping: RoomNumberMapping.create({}).get("mapping"),
  amenityMapping: AmenityMapping.create({}).get("mapping")
});
