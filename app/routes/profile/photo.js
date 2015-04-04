import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.session.get("user");
    //alert(this.session.get("user").id);
    //return this.store.find('profile/user', "1234");
  },
  setupController: function(controller, model) {
    alert(model.id);
    if(Ember.isEmpty(model.get('logo'))){
      model.set('logo',this.store.createRecord('system/document'));
    }

    this._super(controller, model);
  }
});
