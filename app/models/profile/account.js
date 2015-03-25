/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';

export default DS.Model.extend({
    userName:DS.attr(),
    fullName: DS.attr(),
    firstName: DS.attr(),
    lastName: DS.attr(),
    email: DS.attr(),
    password: DS.attr(),
    confirmPassword: DS.attr()
});
