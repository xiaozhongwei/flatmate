import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin,{
  validations: {
    oldPassword: { presence: true },
    password: { presence: true, length: { minimum: 6, maximum: 16 }, confirmation: true}
  },

  oldPassword: DS.attr(),
  password: DS.attr(),
  passwordConfirmation: DS.attr()
});
