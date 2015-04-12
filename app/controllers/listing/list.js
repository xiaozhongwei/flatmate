import Ember from 'ember';
import AreaMapping from 'flatmate/transforms/area';
import PriceMapping from 'flatmate/transforms/price';
import LineMapping from 'flatmate/transforms/metro-line';

export default Ember.Controller.extend({
  isShowList:false,
  queryParams: [ "page", "size", "area", "rentType", "userId",
    "subwayLine","country","occupation", "gender", "price"],
  page: 1,
  size: 10,
  area: "all",
  rentType: "all",
  userId: null,
  subwayLine: "all",
  country: null,
  occupation: "all",
  gender: "all",
  price: null,
  actions:{
    queryListing: function(queryParam, value){
      var queryParams = {};
      queryParams[queryParam] = value;
      if(queryParam === "rentType" && value === "entire"){
        queryParams.country = null;
        queryParams.occupation = "all";
        queryParams.gender = "all";
      }

      this.transitionToRoute({queryParams});
    }
  },

  areaMapping: AreaMapping.create({}).get("mapping"),
  priceMapping: PriceMapping.create({}).get("mapping"),
  lineMapping: LineMapping.create({}).get("mapping")

});
