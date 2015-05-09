import Ember from 'ember';
import AreaMapping from 'flatmate/transforms/area';
import PriceMapping from 'flatmate/transforms/price';
import LineMapping from 'flatmate/transforms/metro-line';
import AmenityMapping from 'flatmate/transforms/amenity';
import CountryMapping from 'flatmate/transforms/country';

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
  country: undefined,
  occupation: "all",
  gender: "all",
  price: undefined,
  actions:{
    queryListing: function(queryParam, value){
      var queryParams = {};
      queryParams[queryParam] = value;
      if(queryParam === "rentType" && value === "entire"){
        queryParams.country = undefined;
        queryParams.occupation = "all";
        queryParams.gender = "all";
      }

      this.transitionToRoute({queryParams});
    },

    preview: function(listing){
      this.set("currentListing",listing);
    }
  },

  areaMapping: AreaMapping.create({}).get("mapping"),
  priceMapping: PriceMapping.create({}).get("mapping"),
  lineMapping: LineMapping.create({}).get("mapping"),
  amenityMapping: AmenityMapping.create({}).get("mapping"),
  countryMapping: CountryMapping.create({}).get("mapping")
});
