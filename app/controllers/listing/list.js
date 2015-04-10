import Ember from 'ember';

export default Ember.Controller.extend({
  isShowList:false,
  queryParams: [ "page", "size", "area", "type", "userId", "subwayLine"],
  page: 1,
  size: 10,
  area: "all",
  type: "room",
  userId: null,
  subwayLine: "all",

  actions:{

  }
});
