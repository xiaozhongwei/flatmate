/**
 * Created by lxj on 3/10/2015.
 */
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),

  text: Ember.computed('name', function(){
    return this.get('name');
  })

});
