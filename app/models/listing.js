/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin,{
  validations: {
    title: { presence: true },
    description: { presence: true },
    //features: { presence: true },
    deposit: { presence: true, numericality: { onlyInteger: true}},
    perMonthPrice: {numericality: { allowBlank: true, onlyInteger: true, greaterThanOrEqualTo: 1000}},
    perThreeMonthPrice: {numericality: { allowBlank: true, onlyInteger: true, greaterThanOrEqualTo: 1000}},
    perSixMonthPrice: {numericality: { allowBlank: true, onlyInteger: true, greaterThanOrEqualTo: 1000}},
    perYearPrice: {numericality: { allowBlank: true, onlyInteger: true, greaterThanOrEqualTo: 1000}}
  },

  availableDate: DS.attr(),                   // 可入住时间

  title: DS.attr(),
  description: DS.attr(),
  perMonthPrice: DS.attr(),                   // 每月一付月租价格
  perThreeMonthPrice: DS.attr(),              // 每三月一付月租价格
  perSixMonthPrice: DS.attr(),                // 每六月一付月租价格
  perYearPrice: DS.attr(),                    // 每年一付月租价格
  deposit: DS.attr(),
  features: DS.attr(),

  //basic: DS.belongsTo('listing/basic'),
  photos: DS.hasMany('listing/photo'),         // 房源图片
  house: DS.belongsTo('listing/house'),       // 所属的house: house类似组的概念， 存储一些公共信息，如小区地铁等


  wishlist: DS.attr(),                        // 所属心愿单
  status: DS.attr(),                          // 状态：0-未发布；1-已发布

  //creator: DS.belongsTo('profile.user'),    // 创建者（房东）信息: 头像 名称 描述
  creatorId: DS.attr(),                       // 创建者id
  creatorName: DS.attr(),                     // 创建者名称
  creatorPhoto: DS.attr(),                    // 创建者头像
  creatorDescription: DS.attr(),              // 创建者描述

  lowestPrice: Ember.computed('perMonthPrice', 'perThreeMonthPrice', 'perSixMonthPrice', 'perYearPrice', function () {
    var price = this.get('perYearPrice');
    //alert(price);
    if(parseFloat(this.get('perSixMonthPrice')) < parseFloat(price)){
      price = this.get('perSixMonthPrice');
    }
    if(this.get('perThreeMonthPrice') < price){
      price = this.get('perThreeMonthPrice');
    }
    if(this.get('perMonthPrice') < price){
      price = this.get('perMonthPrice');
    }


    return price;
  }),

  published: Ember.computed('status', function(){
    return this.get('status') === 1;
  }),

  coverPhoto: Ember.computed('photos',function () {
    return this.get('photos').find(function (item, index, enumerable) {
      if (item.get('index') == 0) {
        return true;
      }
    })
  }),

  isCalendarFinished: Ember.computed('availableDate', function(){
    return !Ember.isEmpty(this.get('availableDate'));
  }),

  isOverviewFinished: Ember.computed('perMonthPrice','perThreeMonthPrice','perSixMonthPrice','perYearPrice','isValid',function(){
    if(Ember.isEmpty(this.get("perMonthPrice")) && Ember.isEmpty(this.get("perThreeMonthPrice")) &&
      Ember.isEmpty(this.get("perSixMonthPrice")) && Ember.isEmpty(this.get("perYearPrice"))){
      return false;
    }
    return this.get('isValid');
  }),

  isPhotoFinished: Ember.computed('photos.length',function(){
    return this.get('photos.length') > 0;
  })
});
