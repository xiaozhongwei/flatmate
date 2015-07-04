import Ember from 'ember';
import CountryMapping from 'flatmate/transforms/country';
import OccupationMapping from 'flatmate/transforms/occupation';
import PayCycleMapping from 'flatmate/transforms/payment-cycle';

export default Ember.Controller.extend(Ember.Evented,{
  availableDate: null,
  init:function(){
    this._super.apply(this, arguments);

    if(!Ember.isEmpty(this.get("model.availableDate"))){
      this.set("availableDate",new Date(this.get("model.availableDate")));
    }
  },
  availableDateObverse: function(){
    var formatDate = moment(this.get("availableDate")).format('YYYY-MM-DD');
    this.get("model").set("availableDate",formatDate);
  }.observes('availableDate'),
  actions: {
    addTenant: function(listing){
      var newTenant = this.store.createRecord('listing/tenant',{listing: listing});
      this.set("currentTenant", newTenant);

      this.trigger('openTenantBox');
    },
    editTenant: function(tenant){
      this.set("currentTenant", tenant);

      this.trigger('openTenantBox');
    },
    changeGender: function(tenant, gender){
      tenant.set('gender', gender);
    },
    saveTenant: function(listing){
      var newTenant = this.store.createRecord('listing/tenant',{listing: listing});

      newTenant.save().then(tenant => {
        listing.get('tenants').unshiftObject(tenant);
      });
    },
    removeTenant: function(tenant){
      tenant.destroyRecord();
      //this.get("model.tenants").removeObject(tenant);
    }
  },
  willDestroy: function(){
    if(this.get("model.isDirty")){
      this.get("model").save();
    }
  },

  countryMapping: CountryMapping.create({}).get("mapping"),
  occupationMapping: OccupationMapping.create({}).get("mapping"),
  payCycleMapping: PayCycleMapping.create({}).get("mapping")
});
