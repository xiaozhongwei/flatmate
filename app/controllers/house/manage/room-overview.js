import Ember from 'ember';
import RoomStatusMapping from 'flatmate/transforms/room-status';
import OccupationMapping from 'flatmate/transforms/occupation';
import GenderMapping from 'flatmate/transforms/gender';
import FeatureMapping from 'flatmate/transforms/feature';

export default Ember.Controller.extend({
  init: function(){
    this.get("model.house.listings").forEach(function(listing){
      if(Ember.isEmpty(listing.get("features"))){
        listing.set("features", Ember.A());
      }
    })
  },
  roomStatusMapping: RoomStatusMapping.create({}).get("mapping"),
  occupationMapping: OccupationMapping.create({}).get("mapping"),
  genderMapping: GenderMapping.create({}).get("mapping"),
  featureMapping: FeatureMapping.create({}).get("mapping")
});