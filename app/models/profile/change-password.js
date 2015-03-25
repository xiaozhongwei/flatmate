/**
 * Created by Zhou Wen Long on 6/8/2014 0008.
 */
import DS from 'ember-data';

export default DS.Model.extend({
    oldPassword: DS.attr(),
    password: DS.attr(),
    confirmPassword: DS.attr()
});
