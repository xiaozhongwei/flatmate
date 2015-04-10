import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  country: DS.attr(),
  gender: DS.attr('', {defaultValue: "1"}),
  phone: DS.attr(),
  wechat: DS.attr(),
  occupation: DS.attr(),
  language: DS.attr(),
  hobby: DS.attr(),
  description: DS.attr(),
  photo: DS.attr(),
  createTime: DS.attr(),

  listingsCount: DS.attr(),
  latestListing: DS.belongsTo('listing'),

  fullName: Ember.computed("firstName","lastName", function(){
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});
