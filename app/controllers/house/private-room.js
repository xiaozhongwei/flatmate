import Ember from 'ember';

export default Ember.Controller.extend({
  activeType: "apt", //apt or flatmate or room
  step: 1,
  listStep: 3, //发布所需步骤

  isOverviewFinished: function(){
    var isFinished = this.get('model.house.isValid') && (this.get('model.house.amenities.length') > 0);
    return isFinished;
  }.property("model.house.isValid","model.house.amenities.length"),

  isPhotoFinished: function(){
    var isFinished = this.get('model.house.photos.length') > 0;
    return isFinished;
  }.property("model.house.photos.length"),

  isMapFinished: function(){
    //var isFinished = Ember.isEmpty(this.get('model.house.location'));
    var isFinished = true;
    return isFinished;
  }.property("model.house.location"),

  isApartmentFinished: function(){
    var isFinished = this.get("isOverviewFinished") && this.get("isPhotoFinished") && this.get("isMapFinished");
    return isFinished;
  }.property("isOverviewFinished","isPhotoFinished","isMapFinished"),

  isFlatmateFinished: function(){
    var finished = true;
    this.get("model.house.flatmates").forEach(flatmate => {
      if(finished && flatmate.get("isOccupied") && !flatmate.get("isValid")){
        finished = false;
      }
    });
    return finished;
  }.property("model.house.flatmates.@each.status","model.house.flatmates.@each.isValid"),

  init: function(){
    this._super.apply(this, arguments);

    if(!Ember.isEmpty(this.get("model.activeId"))){
      this.set("activeType","room");
    }
  },
  actions: {
    changeStep: function(step){
      this.set('step', step);
    },
    changeActive: function(activeType,activeId){
      this.set("activeType",activeType);
      this.set("model.activeId",activeId);

      this.set('step', 1);
    },
    save: function(model){
      model.save();

      var currentStep = this.get("step");
      this.set("step",(currentStep + 1));
    }
  }
});
