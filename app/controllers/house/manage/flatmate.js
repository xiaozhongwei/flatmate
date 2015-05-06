import Ember from 'ember';
import RoomStatusMapping from 'flatmate/transforms/room-status';
import CountryMapping from 'flatmate/transforms/country';
import OccupationMapping from 'flatmate/transforms/occupation';
import GenderMapping from 'flatmate/transforms/gender';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  actions: {
    addFlatmate: function(){
      var newFlatmate = this.store.createRecord('listing.flatmate',{houseId: this.get("model.id")});
      newFlatmate.save().then(flatmate => {
        this.get("model.flatmates").addObject(flatmate);
        this.incrementProperty("model.bedrooms");
        var newListing = this.store.createRecord("listing", {id: flatmate.get("listingId")});
        newListing.transitionTo('saved');
        this.get("model.listings").addObject(newListing);

        Notify.info("New room is created!");
      }, function(){

      });
    },
    editFlatmate: function(flatmate){
      flatmate.toggleProperty("isEditing");
    },
    saveFlatmate: function(flatmate){
      if(flatmate.get('isDirty')){
        if((flatmate.get("isOccupied") && flatmate.get("isValid")) || flatmate.get("isAvailable")){
          flatmate.save().then(res => {
            flatmate.toggleProperty("isEditing");
          });
        }
      }
    },
    deleteFlatmate: function(flatmate){
      flatmate.destroyRecord().then(res => {
        var listings = this.get("model.listings").filterBy("id", flatmate.get("listingId"));
        if(!Ember.isEmpty(listings)){
          this.get("model.listings").removeObject(listings.get("firstObject"));
        }

        var bedrooms = this.get("model.bedrooms");
        this.get("model").set("bedrooms",(bedrooms-1)==0?null:(bedrooms-1));
      },function(){
        Notify.error("delete failed");
      });
    }
  },
  willDestroy: function(){
    if(this.get("model.isDirty")){
      this.get("model").save();
    }
  },
  roomStatusMapping: RoomStatusMapping.create({}).get("mapping"),
  countryMapping: CountryMapping.create({}).get("mapping"),
  occupationMapping: OccupationMapping.create({}).get("mapping"),
  genderMapping: GenderMapping.create({}).get("mapping")
});
