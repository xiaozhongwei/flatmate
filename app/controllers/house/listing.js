import Ember from 'ember';
import ajax from 'ic-ajax';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  statusObverse: function(){
    var status = this.get("model.status");
    var data = {
      "listingStatus":{
        id: this.get("model.id"),
        status: status
      }
    };

    var promise = ajax({url: 'api/listing/updateStatus', type: 'post', data:JSON.stringify(data),
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

  }
});
