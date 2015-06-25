import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.session.get("user");
    //return this.store.find('profile/user', "1234");
  },
  actions:{
    willTransition: function(transition) {
      var model = this.get('controller.model');
      if (model.get('isDirty')) {
        model.rollback();
      }
    }
  }
});
