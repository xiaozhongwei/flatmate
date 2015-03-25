/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';

export default DS.Model.extend({
    fullName: DS.attr(),
    firstName: DS.attr(),
    lastName: DS.attr(),
    email: DS.attr(),
    country: DS.attr(),
    gender: DS.attr('', { defaultValue: 'male'}),
    phone: DS.attr(),
    occupation: DS.attr(),
    hobby: DS.attr(),
    description: DS.attr(),
    logo:DS.belongsTo("system/document")
});
