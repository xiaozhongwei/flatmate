/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';

export default DS.Model.extend({
    //name: DS.attr(),
    email: DS.attr(),
    phone: DS.attr(),
    wechat: DS.attr(),

    house: DS.belongsTo('listing/house')
});
