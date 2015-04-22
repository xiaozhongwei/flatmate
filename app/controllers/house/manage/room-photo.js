import Ember from 'ember';
import config from 'flatmate/config/environment';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  uploadUrl: function(){
    return config.host + "/" + config.apiRoot + "/listing" + "/" + this.get('model.id') + "/photos/upload";
  }.property('model'),
  photoObserve: function(){
    //alert(this.get("model.photos.length"));
    //this.get("model.photos").forEach(photo => {
    //  alert("id: " + photo.id + " index:" + photo.get("index"));
    //})
  }.observes('model.photos.@index'),

  actions: {
    addPhotos: function(photos){
      photos.forEach(photo => {
        var newPhoto = this.store.createRecord('listing/photo',{
          id:photo.id,
          index: photo.index,
          imageUrl: photo.imageUrl
        });
        newPhoto.transitionTo('updated.inFlight');
        this.get("model.photos").addObject(newPhoto);
      });
    },

    saveDescription: function(){
      this.get("model.photos").forEach(photo => {
        if(!Ember.isEmpty(photo.get("description")) && photo.get("isDirty")){
          photo.save().then(function(){
            Notify.info("Photo's description saved");
          },function(){

          });
        }
      });
    }
  }
});
