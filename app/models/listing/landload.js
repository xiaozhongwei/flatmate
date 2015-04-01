import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  country: DS.attr(),
  gender: DS.attr('', {defaultValue: 'male'}),
  phone: DS.attr(),
  wechat: DS.attr(),
  occupation: DS.attr(),
  language: DS.attr(),
  hobby: DS.attr(),
  description: DS.attr(),
  photo: DS.attr(),

  listingsCount: DS.attr(),
  latestListing: DS.belongsTo('listing')
});
