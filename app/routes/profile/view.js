import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('listing/landload',this.session.get("id"));
  }
});
