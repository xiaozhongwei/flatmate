import Ember from 'ember';
import RoomStatusMapping from 'flatmate/transforms/room-status';
import CountryMapping from 'flatmate/transforms/country';
import OccupationMapping from 'flatmate/transforms/occupation';
import GenderMapping from 'flatmate/transforms/gender';
import Notify from 'ember-notify';

export default Ember.Controller.extend(Ember.Evented, {
  needs: ['application'],
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
    },
    changeGender: function(flatmate, gender){
      flatmate.set('gender', gender);
    },
    editRoom: function(flatmate){
      this.set("currentRoom", flatmate);

      this.trigger('showRoomBox');
    },
    back: function(){
      this.get("model").decrementProperty("publishStep");
    },
    save: function(){
      this.set("model.publishStep", null);
      var queryParams = {};
      queryParams.activeId = this.get("currentRoom.id");
      this.transitionToRoute("house.manage", 1, {queryParams});

      this.get("controllers.application").send("closeModalBox");
    }
  },

  roomStatusMapping: RoomStatusMapping.create({}).get("mapping"),
  countryMapping: CountryMapping.create({}).get("mapping"),
  occupationMapping: OccupationMapping.create({}).get("mapping"),
  genderMapping: GenderMapping.create({}).get("mapping")
});
