import Ember from 'ember';
import config from 'flatmate/config/environment';

export default Ember.Controller.extend({
  _profileTitle: "Photo",
  uploadUrl : config.uploadHost,
  actions:{
    remove: function(photo){
      photo.destroyRecord().then($.proxy(function() {
        this.session.get('user').set('logo',this.store.createRecord('system/document'));
      }, this), $.proxy(function() {
        Ember.Logger.error("删除时发生错误。");
        photo.rollback();
      }, this));
    }
  }
});
