import Ember from 'ember';
import config from 'flatmate/config/environment';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  uploadUrl: function(){
    return config.host + "/" + config.apiRoot + "/listing" + "/" + this.get('model.id') + "/photos/upload";
  }.property('model'),
  photosReset: function () {
    var isDirty = false;
    if (!Ember.isEmpty(this.get("model.photos"))) {
      this.get("model.photos").forEach(function (p, index) {
          if(p.get("index") != index){
            isDirty = true;
            p.set("index", index);
          }
        }
      )
    }

    if(isDirty){
      this.get("model").save();
    }
  },
  actions: {
    addPhotos: function(photos){
      photos.forEach(photo => {
        var newPhoto = this.store.createRecord('listing/photo',{
          id:photo.id,
          index: photo.index,
          imageUrl: photo.imageUrl
        });
        newPhoto.transitionTo('saved');
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
    },
    removePhoto: function (photo) {
      photo.destroyRecord();
      this.photosReset();
    },

    movePhoto: function (photo, oldIndex, newIndex) {
      this.photosReset();
    }
  }
});
