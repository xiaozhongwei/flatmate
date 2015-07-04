import Ember from 'ember';
import ajax from 'ic-ajax';
import config from 'flatmate/config/environment';
import Notify from 'ember-notify';

export default Ember.Controller.extend(Ember.Evented,{
  statusObverse: function(){
    var status = this.get("model.status");
    var data = {
      "listingStatus":{
        id: this.get("model.id"),
        status: status
      }
    };

    var promise = ajax({
      url: config.host + "/" + config.apiRoot + '/listing/updateStatus', type: 'post', data:JSON.stringify(data),
      contentType: 'application/json; charset=utf-8'});
    promise['then'](function() {
      //this.get("model").set('status',1);
      if(status === 1){
        Notify.info('list successfully');
      }
      else{
        Notify.info('unList successfully');
      }
    });
    promise['catch'](function(error) {

    });

  }.observes("model.status"),
  actions: {
    showTenants: function(listing){
      listing.toggleProperty("showTenants");
    },
    addTenant: function(listing){
      var newTenant = this.store.createRecord('listing/tenant',{listing: listing});

      newTenant.save().then(tenant => {
        listing.get('tenants').unshiftObject(tenant);
      });
    },
    removeTenant: function(tenant){
      tenant.destroyRecord();
      //this.get("model.tenants").removeObject(tenant);
    }
  }
});
