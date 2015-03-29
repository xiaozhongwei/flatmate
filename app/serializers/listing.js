import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    house: { serialize: 'ids', deserialize: 'records' },
    photos: { embedded: 'always' }
  }
});
