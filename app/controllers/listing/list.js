import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [ "page", "size", "area", "subwayLine"],
  page: 1,
  size: 10,
  area: "all",
  subwayLine: "all",
  actions:{

  }
});