import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  count: DS.attr("number"),

  text: Ember.computed('type','count', function(){
    return this.get("type") + " (" + this.get("count")+ ")";
  })
});
