import Ember from 'ember';
import AreaMapping from 'flatmate/transforms/area';
import CompoundMapping from 'flatmate/transforms/compound';
import StationMapping from 'flatmate/transforms/metro-station';
import BuildingMapping from 'flatmate/transforms/building';
import FloorMapping from 'flatmate/transforms/floor';
import RoomNumberMapping from 'flatmate/transforms/room-number';
import AmenityMapping from 'flatmate/transforms/amenity';

export default Ember.Controller.extend({
  step: 2,
  availableDate: null,
  amenities: ['WashingMachine','Aircon'],
  availableDateObverse: function(){

    if(!Ember.isEmpty(this.get("model.listings.firstObject"))){
      var formatDate = moment(this.get("availableDate")).format('YYYY-MM-DD');
      this.get("model.listings.firstObject").set("availableDate",formatDate);
    }
  }.observes('availableDate'),
  actions: {
    changeStep: function(step){
      this.set('step', step);
    },
    save: function(model){
      model.save();

      var currentStep = this.get("step");
      this.set("step",(currentStep + 1));
    }
  },

  areaMapping: AreaMapping.create({}).get("mapping"),
  compoundMapping: CompoundMapping.create({}).get("mapping"),
  stationMapping: StationMapping.create({}).get("mapping"),
  buildingMapping: BuildingMapping.create({}).get("mapping"),
  floorMapping: FloorMapping.create({}).get("mapping"),
  roomNumberMapping: RoomNumberMapping.create({}).get("mapping"),
  amenityMapping: AmenityMapping.create({}).get("mapping")
});
