/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    description: DS.attr(),

    perMonthPrice: DS.attr(),
    perThreeMonthPrice: DS.attr(),
    perSixMonthPrice: DS.attr(),
    perYearPrice: DS.attr(),

    deposit: DS.attr(),

    features: DS.belongsTo('listing/feature'),

    listing: DS.belongsTo('listing')
});
