/**
 * Created by lxj on 3/10/2015.
 */
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  area: DS.attr(),
  address: DS.attr(),
  xCoordinate: DS.attr(),
  yCoordinate: DS.attr(),
  metroStations: DS.attr()

});
