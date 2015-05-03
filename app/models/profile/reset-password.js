import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend({
  validations: {
    password: { presence: true, length: { minimum: 6, maximum: 16 }, confirmation: true}
  },

  userId: DS.attr(),
  token: DS.attr(),
  password: DS.attr(),
  passwordConfirmation: DS.attr()
});
