import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['single-checkbox'],
  classNameBindings: ['isOdd:odd'],

  //tagName: 'li',

  value: null,

  selection: [],

  valueProperty: null,

  labelProperty: null,

  disabled: false,

  type: 'edit',

  index: null,

  isOdd: function(){
    return parseInt(this.get('index')) % 2 === 0;
  }.property('index'),

  isSelected: function (_, checked) {
    var valueProperty = this.get('valueProperty');
    var value = this.get('value');

    if (valueProperty) {
      if (typeof value.get === 'function') {
        value = value.get(valueProperty);
      } else {
        value = value[valueProperty]
      }
    }

    var selected = this.get('selection').contains(value);

    if (arguments.length > 1) {

      if (checked && !selected) {
        this.get('selection').addObject(value);
      } else if (!checked && selected) {
        this.get('selection').removeObject(value);
      }
    }

    return selected;
  }.property('value', 'selection'),

  label: function () {
    var labelProperty = this.get('labelProperty');
    var value = this.get('value');

    if (labelProperty) {
      if (typeof value.get === 'function') {
        return value.get(labelProperty);
      } else {
        return value[labelProperty];
      }
    } else {
      return String(value);
    }
  }.property('value', 'labelProperty')
});
