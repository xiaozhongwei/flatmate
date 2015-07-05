/**
 * Created by lxj on 3/10/2015.
 */
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  area: DS.attr(),
  address: DS.attr(),
  longitude: DS.attr(),     //经度
  latitude: DS.attr(),      //纬度
  metroStations: DS.attr()
});
