import DS from 'ember-data';

export default DS.Transform.extend({
  // The deserialize function just transforms the string it receives from the
  // server JSON response into a date.
  deserialize: function (serialized) {
    if (serialized) {
      return moment(serialized).toDate();
    }
    return serialized;
  },

  // The serialize function takes the value of the attribute on the model and
  // transforms it into 'YYYY-MM-DD' string to send to our server.
  serialize: function (deserialized) {
    if (deserialized) {
      return moment(deserialized).format('YYYY-MM-DD');
    }
    return deserialized;
  }
});
