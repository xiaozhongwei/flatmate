import Ember from 'ember';
import RoomNumberMapping from 'flatmate/transforms/room-number';
import AmenityMapping from 'flatmate/transforms/amenity';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  actions: {
    save: function(){
      if(this.get('model.isDetailFinished')){
        this.get("model").incrementProperty("publishStep");

        if(!Ember.isEmpty(this.get("model.id"))){
          this.get("model").save().then(house => {
            //this.set("model",house);
          });
        }
      }
      else{
        Notify.error("This step is not finished yet!");
      }
    }
  },

  roomNumberMapping: RoomNumberMapping.create({}).get("mapping"),
  amenityMapping: AmenityMapping.create({}).get("mapping")
});
