import Ember from 'ember';

export default Ember.Component.extend({
  //classNames: ['home-amenities'],

  classNameBindings: ['editable:home-amenities:intro-content'],

  //tagName: 'ul',

  options: null,

  selection: null,

  valueProperty: null,

  labelProperty: null,

  disabled: false,

  type: 'edit',

  editable: function () {
    return this.get('type') === 'edit';
  }.property('type')
});
