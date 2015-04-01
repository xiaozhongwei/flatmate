import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  country: DS.attr(),
  gender: DS.attr('', {defaultValue: 'male'}),
  phone: DS.attr(),
  occupation: DS.attr(),
  language: DS.attr(),
  wechat: DS.attr(),
  hobby: DS.attr(),
  description: DS.attr(),
  logo: DS.belongsTo("system/document")
});
