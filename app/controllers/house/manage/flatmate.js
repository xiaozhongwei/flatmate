import Ember from 'ember';
import RoomStatusMapping from 'flatmate/transforms/room-status';
import OccupationMapping from 'flatmate/transforms/occupation';
import GenderMapping from 'flatmate/transforms/gender';

export default Ember.Controller.extend({
  actions: {
    addFlatmate: function(){
      var newFlatmate = this.store.createRecord('listing.flatmate',{houseId: this.get("model.id")});
      newFlatmate.save().then(flatmate => {

      }, function(){

      });
    }
  },
  roomStatusMapping: RoomStatusMapping.create({}).get("mapping"),
  occupationMapping: OccupationMapping.create({}).get("mapping"),
  genderMapping: GenderMapping.create({}).get("mapping")
});
