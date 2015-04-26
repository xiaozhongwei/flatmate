/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin,{
  validations: {
    firstName: { presence: true },
    lastName: { presence: true },
    email: { presence: true, format: { with: /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/, message: 'must be emails only'  } },
    gender: { presence: true },
    phone: { presence: true, numericality: { onlyInteger: true} }
  },

  //fullName: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  country: DS.attr(),
  gender: DS.attr('', {defaultValue: "1"}),
  phone: DS.attr(),
  occupation: DS.attr(),
  languages: DS.attr(),
  wechat: DS.attr(),
  hobbies: DS.attr(),
  description: DS.attr(),
  createTime: DS.attr(),
  logo: DS.belongsTo("system/document"),

  fullName: Ember.computed("firstName","lastName", function(){
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});
