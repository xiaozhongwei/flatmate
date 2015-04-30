import Ember from 'ember';

export default Ember.Controller.extend({
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

  willDestroy: function(){
    if(this.get("model.isDirty")){
      this.get("model").save();
    }
  }
});
