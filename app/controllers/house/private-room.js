import Ember from 'ember';
import ajax from 'ic-ajax';
import Notify from 'ember-notify';
import config from 'flatmate/config/environment';

export default Ember.Controller.extend({
  activeType: "apt", //apt or flatmate or room
  step: 1,

  //isOverviewFinished: function(){
  //  var isFinished = this.get('model.house.isValid') && (this.get('model.house.amenities.length') > 0);
  //  return isFinished;
  //}.property("model.house.isValid","model.house.amenities.length"),
  //
  //isPhotoFinished: function(){
  //  var isFinished = this.get('model.house.photos.length') > 0;
  //  return isFinished;
  //}.property("model.house.photos.length"),
  //
  //isMapFinished: function(){
  //  //var isFinished = Ember.isEmpty(this.get('model.house.location'));
  //  var isFinished = true;
  //  return isFinished;
  //}.property("model.house.location"),

  //isApartmentFinished: function(){
  //  var isFinished = this.get("isOverviewFinished") && this.get("isPhotoFinished") && this.get("isMapFinished");
  //  return isFinished;
  //}.property("isOverviewFinished","isPhotoFinished","isMapFinished"),
  //
  //isFlatmateFinished: function(){
  //  var finished = true;
  //  this.get("model.house.flatmates").forEach(flatmate => {
  //    if(finished && flatmate.get("isOccupied") && !flatmate.get("isValid")){
  //      finished = false;
  //    }
  //  });
  //  return finished;
  //}.property("model.house.flatmates.@each.status","model.house.flatmates.@each.isValid"),

  flatmatesObserver: function(){
    if(this.get("model.house.bedrooms") < 1){
      this.set("activeType","apt");
      this.set('step', 1);
    }
  }.observes("model.house.bedrooms"),
  //saveAll: function(){
  //  if(this.get("model.house.isDirty")){
  //    this.get("model.house").save();
  //  }
  //
  //  if(!Ember.isEmpty(this.get("model.house.listings"))){
  //    this.get("model.house.listings").forEach(listing => {
  //      if(listing.get("isDirty")){
  //        listing.save();
  //      }
  //    })
  //  }
  //},
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
      // apt 完成才能够跳转
      if(this.get("model.house.isApartmentFinished") || activeType === "apt"){
        // flatmate 完成room才能跳转
        if(this.get("model.house.isFlatmateFinished") || activeType != "room"){
          this.set("activeType",activeType);
          this.set("model.activeId",activeId);

          this.set('step', 1);
        }
      }
    },
    //save: function(model){
    //  model.save();
    //
    //  var currentStep = this.get("step");
    //  this.set("step",(currentStep + 1));
    //},
    changeStatus: function(listing) {
      var status = listing.get("published") ? 0:1;
      var data = {
        "listingStatus": {
          id: listing.get("id"),
          status: status
        }
      };

      var promise = ajax({
        url: config.host + "/" + config.apiRoot + '/listing/updateStatus', type: 'post', data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8'
      });
      promise['then'](function () {
        listing.set("status",status);
        if (status === 1) {
          Notify.info('list successfully');
        }
        else {
          Notify.info('unList successfully');
        }
      });
      promise['catch'](function (error) {

      });
    }
  }
});
