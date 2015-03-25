/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';

export default DS.Model.extend({
    hasWashingMachine: DS.attr('boolean', { defaultValue: false}),
    hasAircon: DS.attr('boolean', { defaultValue: false}),
    hasTV: DS.attr('boolean', { defaultValue: false}),
    hasOven: DS.attr('boolean', { defaultValue: false}),
    hasDryer: DS.attr('boolean', { defaultValue: false}),
    hasDVDPlayer: DS.attr('boolean', { defaultValue: false}),
    hasInternet: DS.attr('boolean', { defaultValue: false}),
    hasSecurity: DS.attr('boolean', { defaultValue: false}),
    hasHealthClub: DS.attr('boolean', { defaultValue: false}),
    hasPool: DS.attr('boolean', { defaultValue: false}),
    hasBalcony: DS.attr('boolean', { defaultValue: false}),
    hasOutdoorSpace: DS.attr('boolean', { defaultValue: false}),
    hasElevator: DS.attr('boolean', { defaultValue: false})
});
