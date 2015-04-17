import Ember from 'ember';

export default Ember.Controller.extend({
  availableDate: null,
  availableDateObverse: function(){
    if(!Ember.isEmpty(this.get("model.listings.firstObject"))){
      var formatDate = moment(this.get("availableDate")).format('YYYY-MM-DD');
      this.get("model.listings.firstObject").set("availableDate",formatDate);
    }
  }.observes('availableDate')
});
