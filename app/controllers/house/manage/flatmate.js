import Ember from 'ember';
import RoomStatusMapping from 'flatmate/transforms/room-status';
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
        newListing.transitionTo('updated.inFlight');
        this.get("model.listings").addObject(newListing);

        Notify.info("New room is created!");
      }, function(){

      });
    }
  },
  roomStatusMapping: RoomStatusMapping.create({}).get("mapping"),
  occupationMapping: OccupationMapping.create({}).get("mapping"),
  genderMapping: GenderMapping.create({}).get("mapping")
});
