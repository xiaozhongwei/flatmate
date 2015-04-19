import Ember from 'ember';
import config from 'flatmate/config/environment';

export default Ember.Controller.extend({
  uploadUrl: function(){
    return config.host + "/" + config.apiRoot + "/listing" + "/" + this.get('model.id') + "/photos/upload";
  }.property('model'),
  photoObserve: function(){
  }.observes('model.photos'),

  actions: {
    addPhotos: function(photos){
      photos.forEach(photo => {
        var newPhoto = this.store.createRecord('listing/photo',{
          id:photo.id,
          index: photo.index,
          imageUrl: photo.imageUrl
        });

        this.get("model.photos").addObject(newPhoto);
      });
    }
  }
});
