import Ember from 'ember';
import AreaMapping from 'flatmate/transforms/area';
import CompoundMapping from 'flatmate/transforms/compound';
import StationMapping from 'flatmate/transforms/metro-station';
import BuildingMapping from 'flatmate/transforms/building';
import FloorMapping from 'flatmate/transforms/floor';
import Notify from 'ember-notify';

export default Ember.Controller.extend(Ember.Evented,{
  needs: ['application'],
  newAddress: Ember.Object.create(),
  actions: {
    editAddress: function(){
      //this.set("newAddress", this.get("model"));
      this.get("newAddress").setProperties({address: this.get("model.address"), area: this.get("model.area"),compound: this.get("model.compound"),
        metroStations: this.get("model.metroStations"),building: this.get("model.building"),floor: this.get("model.floor"), doorplate: this.get("model.doorplate")});
      //this.get("newAddress").address = this.get("model.address");
      this.trigger('openAddressBox');
    },
    saveAddress: function(){
      this.get("model").setProperties(this.get("newAddress"));
      this.get("controllers.application").send("closeModalBox");
    },
    back: function(){
      this.get("model").decrementProperty("publishStep");
    },
    save: function(){
      if(this.get("model.isAddressFinished")){
        this.get("model").incrementProperty("publishStep");
        this.get("model").save().then(house => {
          //this.set("model",house);
        });
      }
      else{
        Notify.error("This step is not finished yet!");
      }
    }
  },

  areaMapping: AreaMapping.create({}).get("mapping"),
  compoundMapping: CompoundMapping.create({}).get("mapping"),
  stationMapping: StationMapping.create({}).get("mapping"),
  buildingMapping: BuildingMapping.create({}).get("mapping"),
  floorMapping: FloorMapping.create({}).get("mapping"),
});
