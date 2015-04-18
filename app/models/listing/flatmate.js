/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';

export default DS.Model.extend({
  index: DS.attr(),
  status: DS.attr(),                              // 'renting': 招租中; 'rented': 已出租; 'vacant': 空置;
  houseId: DS.attr(),
  listingId: DS.attr(),                           // 关联的房源信息
  country: DS.attr(),
  gender: DS.attr('', {defaultValue: '1'}),
  occupation: DS.attr(),
  hobby: DS.attr(),

  editable: true,

  isMale: function () {
    return this.get('gender') === "male";
  }.property('gender'),
  isAvailable: function () {
    return this.get('status') === "available";
  }.property('status'),
  isOccupied: function () {
    return this.get('status') === "occupied";
  }.property('status')

  //,isRenting: function(){
  //    return this.get('status') === "renting";
  //}.property('status'),
  //isRented: function(){
  //    return this.get('status') === "rented";
  //}.property('status'),
  //isVacant: function(){
  //    return this.get('status') === "vacant";
  //}.property('status')

});
