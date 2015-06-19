import DS from 'ember-data';

export default DS.Model.extend({
  type: DS.attr(),
  count: DS.attr("number"),

  totalCount: DS.attr(),
  entireCount: DS.attr(),
  shareCount: DS.attr()
});
