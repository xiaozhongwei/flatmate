import Ember from 'ember';
import config from 'flatmate/config/environment';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  uploadUrl: function () {
    return config.host + "/" + config.apiRoot + "/house" + "/" + this.get('model.id') + "/photos/upload";
  }.property('model.id'),
  photosReset: function () {
    if (!Ember.isEmpty(this.get("model.photos"))) {
      this.get("model.photos").forEach(function (p, index) {
          if(p.get("index") != index){
            p.set("index", index);
          }
        }
      )
    }
  },
  actions: {
    addPhotos: function (photos) {
      photos.forEach(photo => {
        var newPhoto = this.store.createRecord('listing/photo', {
          id: photo.id,
          index: photo.index,
          imageUrl: photo.imageUrl
        });
        newPhoto.transitionTo('saved');
        this.get("model.photos").addObject(newPhoto);
      });
    },

    saveDescription: function () {
      this.get("model.photos").forEach(photo => {
        if (!Ember.isEmpty(photo.get("description")) && photo.get("isDirty")) {
          photo.save().then(function () {
            Notify.info('Description saved');
          }, function () {

          });
        }
      });
    },
    removePhoto: function (photo) {
      photo.deleteRecord();
      this.photosReset();
      this.get("model").save();
    },

    movePhoto: function (photo, oldIndex, newIndex) {
      this.photosReset();
      if(oldIndex != newIndex){
        this.get("model").save();
      }
    },
    back: function(){
      this.get("model").decrementProperty("publishStep");
    },
    save: function(){
      if(this.get("model.isPhotoFinished")){
        this.get("model").incrementProperty("publishStep");
        this.get("model").save();
      }
      else{
        Notify.error("This step is not finished yet!");
      }
    }
  }
});
