import Ember from 'ember';
import RoomStatusMapping from 'flatmate/transforms/room-status';
import CountryMapping from 'flatmate/transforms/country';
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
  actions:{
    saveFlatmate: function(flatmate){
      if(flatmate.get('isDirty')){
        if((flatmate.get("isOccupied") && flatmate.get("isValid")) || flatmate.get("isAvailable")){
          flatmate.save();
        }
      }

    }
  },
  willDestroy: function(){
    if(!Ember.isEmpty(this.get("model.house.listings"))){
      this.get("model.house.listings").forEach(function(listing){
        if(listing.get("isDirty")){
          listing.save();
        }
      })
    }

    if(this.get("model.isDirty")){
      this.get("model").save();
    }
  },
  roomStatusMapping: RoomStatusMapping.create({}).get("mapping"),
  countryMapping: CountryMapping.create({}).get("mapping"),
  occupationMapping: OccupationMapping.create({}).get("mapping"),
  genderMapping: GenderMapping.create({}).get("mapping"),
  featureMapping: FeatureMapping.create({}).get("mapping")
});
