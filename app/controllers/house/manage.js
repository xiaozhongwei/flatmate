import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: [ "activeId"],
  activeId: null,

  privateRoomContent: function(){
    var activeId = this.get("activeId");
    var house = this.get("model");

    return {activeId: activeId, house: house};
  }.property('activeId', 'model')


});
