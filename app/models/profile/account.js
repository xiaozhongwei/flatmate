/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin,{
  validations: {
    firstName: { presence: true },
    //lastName: { presence: true },
    email: { presence: true, format: { with: /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z0-9]{2,5}$/, message: 'must be emails only'  } },
    password: { presence: true, length: { minimum: 6, maximum: 16 }, confirmation: true}
  },

  //userName:DS.attr(),
  //fullName: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  email: DS.attr(),
  password: DS.attr(),
  passwordConfirmation: DS.attr()
});
