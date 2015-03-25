/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';

export default DS.Model.extend({
    hasBalcony: DS.attr('boolean', { defaultValue: false}),
    hasPrivateBath: DS.attr('boolean', { defaultValue: false}),
    hasTV: DS.attr('boolean', { defaultValue: false}),
    hasDeskOrWardrobe: DS.attr('boolean', { defaultValue: false})
});
