import Ember from 'ember';
import Notify from 'ember-notify';
import LanguageMapping from 'flatmate/transforms/language';
import OccupationMapping from 'flatmate/transforms/occupation';
import HobbyMapping from 'flatmate/transforms/hobby';
import CountryMapping from 'flatmate/transforms/country';

export default Ember.Controller.extend({
  _profileTitle:"Edit",
  //modelObserve: function(){
  //  if (this.model.get('isDirty') && this.model.get('isValid')) {
  //    this.model.save().then($.proxy(function(user) {
  //      Notify.info('保存成功');
  //    }, this), function() {
  //      Ember.Logger.error("保存时发生错误。");
  //    });
  //  }
  //}.observes('this.model.isDirty'),
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
    },
    changeGender: function(model, gender){
      model.set('gender', gender);
    },
  },

  languageMapping: LanguageMapping.create({}).get("mapping"),
  occupationMapping: OccupationMapping.create({}).get("mapping"),
  hobbyMapping: HobbyMapping.create({}).get("mapping"),
  countryMapping: CountryMapping.create({}).get("mapping")

});
