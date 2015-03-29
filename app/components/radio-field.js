/**
 * Created by ZhouWenLong on 2014/10/28.
 */
Ember.RadioField = Ember.Component.extend({
    tagName: 'input',
    type: 'radio',
    style: '',
    attributeBindings: ['type', 'htmlChecked:checked', 'value', 'name', 'style', 'disabled:disabled'],
    htmlChecked: function() {
        return this.get('value') === this.get('checked');
    }.property('value', 'checked'),
    change: function() {
        this.set('checked', this.get('value'));
    },
    didInsertElement : function() {
        //Helper.Plugin.initUniform();
    }
});

Ember.Handlebars.helper('radio-field', Ember.RadioField);

export default Ember.RadioField;
