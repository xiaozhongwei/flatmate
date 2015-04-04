import Ember from 'ember';
import Notify from 'ember-notify';
import LanguageMapping from 'flatmate/transforms/language';
import OccupationMapping from 'flatmate/transforms/occupation';
import HobbyMapping from 'flatmate/transforms/hobby';

export default Ember.Controller.extend({
  _profileTitle:"Edit Profile",
  actions: {
    save: function(model){
      if (model.get('isValid')) {
        model.save().then($.proxy(function(user) {
          Notify.info('保存成功');
        }, this), function() {
          Ember.Logger.error("保存时发生错误。");
        });
      }
      else {
        Notify.error("当前数据验证错误，请检查错误后再进行尝试!");
      }
    }
  },

  languageMapping: LanguageMapping.create({}).get("mapping"),
  occupationMapping: OccupationMapping.create({}).get("mapping"),
  hobbyMapping: HobbyMapping.create({}).get("mapping")

});
