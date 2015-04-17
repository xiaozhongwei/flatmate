import Ember from 'ember';
import AreaMapping from 'flatmate/transforms/area';
import CompoundMapping from 'flatmate/transforms/compound';
import StationMapping from 'flatmate/transforms/metro-station';
import BuildingMapping from 'flatmate/transforms/building';
import FloorMapping from 'flatmate/transforms/floor';
import RoomNumberMapping from 'flatmate/transforms/room-number';
import AmenityMapping from 'flatmate/transforms/amenity';

export default Ember.Controller.extend({
  areaMapping: AreaMapping.create({}).get("mapping"),
  compoundMapping: CompoundMapping.create({}).get("mapping"),
  stationMapping: StationMapping.create({}).get("mapping"),
  buildingMapping: BuildingMapping.create({}).get("mapping"),
  floorMapping: FloorMapping.create({}).get("mapping"),
  roomNumberMapping: RoomNumberMapping.create({}).get("mapping"),
  amenityMapping: AmenityMapping.create({}).get("mapping")
});
