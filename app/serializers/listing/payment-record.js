import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
  attrs: {
    transactionRecords: {embedded: 'always'}
  }
});
