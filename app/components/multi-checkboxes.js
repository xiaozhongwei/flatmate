import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['multiselect-checkboxes'],

  tagName: 'ul',

  options: null,

  selection: null,

  valueProperty: null,

  labelProperty: null,

  disabled: false
});
