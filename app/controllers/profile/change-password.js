import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  _profileTitle: "Change Password",

  actions: {
    cancel: function(model) {
      model.rollback();
      model.transitionTo('loaded.created.uncommitted');
    },
    save: function(model) {
      var _this = this;
      if (model.get('isValid')) {
        var promise = model.save();
        promise.then(function() {
          Notify.info('密码修改成功!');
          _this.set("model", _this.store.createRecord('profile/changePassword')) ;
        });
        promise['catch'](function(e) {
          var result = JSON.parse(e.responseText),
            errors = "";
          result.errors.forEach(function(error) {
            errors += error.message;
          });
          Notify.error("提交失败，" + errors + "!");
        });
      }
      else {
        Notify.error("当前数据验证错误，请检查错误后再进行尝试!");
      }
    }
  }
});
