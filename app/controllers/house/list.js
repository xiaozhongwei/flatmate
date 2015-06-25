import Ember from 'ember';
import Notify from 'ember-notify';
import RoomStatusMapping from 'flatmate/transforms/room-status';
import ListingStatusMapping from 'flatmate/transforms/listing-status';
import CountryMapping from 'flatmate/transforms/country';
import OccupationMapping from 'flatmate/transforms/occupation';
import GenderMapping from 'flatmate/transforms/gender';
import PayCycleMapping from 'flatmate/transforms/payment-cycle';

export default Ember.Controller.extend(Ember.Evented,{
  needs: ['application'],
  _profileTitle:"Listings",
  queryParams: [ "page", "size", "status", "type", 'area', 'roomStatus'],
  page: 1,
  size: 10,
  status: 'All',// 状态-是否发布
  type: 'entire',
  area: undefined,
  roomStatus: undefined, //是否空置
  filterTenants: function() {
    var name = this.get('nameFilter');
    this.store.find('listing/tenant',{name: name}).then(tenants => {
      this.set("filteredTenants",tenants);
    });

    //var articles = this.get('model');
    //
    //if (category) {
    //  return articles.filterBy('category', category);
    //} else {
    //  return articles;
    //}
  }.observes('nameFilter'),
  payCycleObserve: function(){
    if(!Ember.isEmpty(this.get("currentTenant.paymentCycle"))){
      if(this.get("currentTenant.paymentCycle")===3){
        this.set("currentTenant.price", this.get("currentListing.perThreeMonthPrice"));
      }
      else if(this.get("currentTenant.paymentCycle")===6){
        this.set("currentTenant.price", this.get("currentListing.perSixMonthPrice"));
      }
      else if(this.get("currentTenant.paymentCycle")===1){
        this.set("currentTenant.price", this.get("currentListing.perMonthPrice"));
      }
      else if(this.get("currentTenant.paymentCycle")===12){
        this.set("currentTenant.price", this.get("currentListing.perYearPrice"));
      }
    }
  }.observes("currentTenant.paymentCycle").on("change"),
  dateObserve: function(){
    if(!Ember.isEmpty(this.get("currentTenant.paymentCycle")) && !Ember.isEmpty(this.get("currentTenant.contractStartDate")) &&
        !Ember.isEmpty(this.get("currentTenant.contractEndDate"))){
      this.set("transactionDate", new Date(this.get("currentTenant.contractStartDate")));
      this.get("currentTenant.records").clear();
      while(this.get("transactionDate") < new Date(this.get("currentTenant.contractEndDate"))){
        var transactionRecord = this.store.createRecord("listing/transactionRecord",{
          transactionDate: moment(new Date(this.get("transactionDate"))).subtract(this.get("currentTenant.advanceDay"),"days").format('YYYY-MM-DD')
        });
        this.get("currentTenant.records").pushObject(transactionRecord);

        //this.set("transactionDate",  moment(new Date(this.get("currentTenant.contractStartDate"))).subtract(this.get("currentTenant.advanceDay"), 'days'));

        this.set("transactionDate",  moment(new Date(this.get("transactionDate"))).add(this.get("currentTenant.paymentCycle"), 'months'));
      }
    }
  }.observes("currentTenant.paymentCycle","currentTenant.contractStartDate","currentTenant.contractEndDate","currentTenant.advanceDay").on("change"),
  actions: {
    queryHouse: function(status, type){
      this.set("nameFilter", undefined);

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
    editTenant: function(tenant,listing, house){
      this.set('currentTenant', tenant);
      this.set('currentListing', listing);
      this.set('currentHouse', house);
      this.trigger('openTenantBox');
    },
    cancel: function(tenant){
      tenant.rollback();
      this.get("controllers.application").send("closeModalBox");
    },
    saveTenant: function(tenant){
      var promise = tenant.save();
      promise.then(res => {
        //this.get('modal').hide();
        this.get("controllers.application").send("closeModalBox");
        Notify.info('save tenant success');
      });
    },
    checkoutTenant: function(tenant){
      tenant.set("checkoutDate",new Date());
      var promise = tenant.save();
      promise.then(res => {
        //this.get('modal').hide();
        this.get("controllers.application").send("closeModalBox");
        Notify.info('save tenant success');
      });
    }
  },

  roomStatusMapping: RoomStatusMapping.create({}).get("mapping"),
  listingStatusMapping: ListingStatusMapping.create({}).get("mapping"),
  countryMapping: CountryMapping.create({}).get("mapping"),
  occupationMapping: OccupationMapping.create({}).get("mapping"),
  genderMapping: GenderMapping.create({}).get("mapping"),
  payCycleMapping: PayCycleMapping.create({}).get("mapping")
});
