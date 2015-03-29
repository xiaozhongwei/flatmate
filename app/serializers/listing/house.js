import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    listings: {embedded: 'always'},
    flatmates: {embedded: 'always'},
    contact: { embedded: 'always' },
    photos: { embedded: 'always' }
  }
});
