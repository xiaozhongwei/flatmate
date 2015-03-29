import Ember from 'ember';
import Notify from 'ember-notify';
import OccupationMapping from 'flatmate/transforms/occupation';
import HobbyMapping from 'flatmate/transforms/hobby';

export default Ember.Controller.extend({
  _profileTitle:"Edit Profile",
  actions: {
    save: function(model){
      model.save().then($.proxy(function(listing) {
        Notify.info('保存成功');
      }, this), function() {
        Ember.Logger.error("保存房源时发生错误。");
      });
    }
  },

  occupationMapping: OccupationMapping.create({}).get("mapping"),
  hobbyMapping: HobbyMapping.create({}).get("mapping")

});
