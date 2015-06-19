import Ember from 'ember';
import RoomStatusMapping from 'flatmate/transforms/room-status';
import ListingStatusMapping from 'flatmate/transforms/listing-status';
import CountryMapping from 'flatmate/transforms/country';
import OccupationMapping from 'flatmate/transforms/occupation';
import GenderMapping from 'flatmate/transforms/gender';

export default Ember.Controller.extend(Ember.Evented,{
  _profileTitle:"Listings",
  queryParams: [ "page", "size", "status", "type", 'area', 'roomStatus'],
  page: 1,
  size: 10,
  status: 'All',// 状态-是否发布
  type: 'entire',
  area: undefined,
  roomStatus: undefined, //是否空置
  //listingObverse: function(){
  //  alert(10);
  //}.observes("model.@listings"),
  actions: {
    queryHouse: function(status, type){
      var queryParams = {};
      queryParams.status = status;
      queryParams.type = type;
      queryParams.page = 1;
      this.transitionToRoute({queryParams});
    },
    toggleHouse: function(house){
      house.toggleProperty('isExpand')
    },
    manageHouse: function(house){
      this.transitionToRoute('house.manage', house.get('id'));
    },
    editTenant: function(){

      this.trigger('openTenantBox');
    }
  },

  roomStatusMapping: RoomStatusMapping.create({}).get("mapping"),
  listingStatusMapping: ListingStatusMapping.create({}).get("mapping"),
  countryMapping: CountryMapping.create({}).get("mapping"),
  occupationMapping: OccupationMapping.create({}).get("mapping"),
  genderMapping: GenderMapping.create({}).get("mapping")
});
