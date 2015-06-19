import Ember from 'ember';
import ajax from 'ic-ajax';
import Notify from 'ember-notify';
import config from 'flatmate/config/environment';
import ListingStatusMapping from 'flatmate/transforms/listing-status';

export default Ember.Controller.extend({
  step: 1,
  //listStep: 4, //发布所需步骤
  //isCalendarFinished: function(){
  //  var isFinished = !Ember.isEmpty(this.get('model.listings.firstObject.availableDate'));
  //  return isFinished;
  //}.property("model.listings.firstObject.availableDate"),
  //isOverviewFinished: function(){
  //  var isFinished = this.get('model.isValid') && this.get('model.listings.firstObject.isValid') &&
  //    (this.get('model.amenities.length') > 0);
  //  return isFinished;
  //}.property("model.isValid","model.listings.firstObject.isValid","model.amenities.length"),
  //isPhotoFinished: function(){
  //  var isFinished = this.get("model.listings.firstObject.photos.length") > 0;
  //  return isFinished;
  //}.property("model.listings.firstObject.photos.length"),
  //isMapFinished: function(){
  //  //var isFinished = !Ember.isEmpty(this.get('model.location'));
  //  var isFinished = true;
  //  return isFinished;
  //}.property("model.location"),
  //
  //listStep: function(){   //发布所需步骤
  //  var steps = 4;
  //  if(this.get("isCalendarFinished")){
  //    steps--;
  //  }
  //  if(this.get("isOverviewFinished")){
  //    steps--;
  //  }
  //  if(this.get("isPhotoFinished")){
  //    steps--;
  //  }
  //  if(this.get("isMapFinished")){
  //    steps--;
  //  }
  //  return steps;
  //}.property("isCalendarFinished","isOverviewFinished","isPhotoFinished","isMapFinished"),

  actions: {
    changeStep: function(step){
      //if(this.get("model.isDirty")){
        //this.get("model").save();
      //}

      this.set('step', step);
    },
    changeStatus: function(){
      var status = this.get("model.listings.firstObject.status");
      var data = {
        "listingStatus":{
          id: this.get("model.listings.firstObject.id"),
          status: status
        }
      };

      var promise = ajax({
        url: config.host + "/" + config.apiRoot + '/listing/updateStatus', type: 'post', data:JSON.stringify(data),
        contentType: 'application/json; charset=utf-8'});
      promise['then'](function() {
        //this.get("model").set('status',1);
        if(status === 1){
          Notify.info('list successfully');
        }
        else{
          Notify.info('unList successfully');
        }
      });
      promise['catch'](function(error) {

      });
    }
  },

  listingStatusMapping: ListingStatusMapping.create({}).get("mapping")
});
