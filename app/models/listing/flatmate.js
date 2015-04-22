/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin,{
  validations: {
    status: { presence: true },
    //country: { presence: true },
    gender: { presence: true },
    occupation: { presence: true }
  },

  index: DS.attr(),
  status: DS.attr('number', {defaultValue: 1}),   // 状态
  houseId: DS.attr(),
  listingId: DS.attr(),                           // 关联的房源信息
  country: DS.attr(),
  gender: DS.attr('', {defaultValue: '1'}),
  occupation: DS.attr(),
  //hobby: DS.attr(),

  editable: true,

  isAvailable: Ember.computed('status', function () {
    return this.get('status') === 0;
  }),

  isOccupied: Ember.computed('status', function () {
    return this.get('status') === 1;
  })

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
