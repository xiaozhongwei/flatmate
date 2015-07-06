/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin,{
  validations: {
    title: { presence: true },
    description: { presence: true },
    deposit: { presence: true, numericality: { onlyInteger: true}},
    serviceFee: {numericality: { allowBlank: true, onlyInteger: true}}
    //,
    //perMonthPrice: {numericality: { allowBlank: true, onlyInteger: true/*, greaterThanOrEqualTo: 1000*/}},
    //perThreeMonthPrice: {numericality: { allowBlank: true, onlyInteger: true/*, greaterThanOrEqualTo: 1000*/}},
    //perSixMonthPrice: {numericality: { allowBlank: true, onlyInteger: true/*, greaterThanOrEqualTo: 1000*/}},
    //perYearPrice: {numericality: { allowBlank: true, onlyInteger: true/*, greaterThanOrEqualTo: 1000*/}}
  },

  availableDate: DS.attr(),                   // 可入住时间

  index: DS.attr(),                           // index

  title: DS.attr(),
  description: DS.attr(),

  //perMonthPrice: DS.attr(),                   // 每月一付月租价格
  //perThreeMonthPrice: DS.attr(),              // 每三月一付月租价格
  //perSixMonthPrice: DS.attr(),                // 每六月一付月租价格
  //perYearPrice: DS.attr(),                    // 每年一付月租价格

  payments: DS.hasManyFragments('listing/payment'),

  deposit: DS.attr(),                         // 押金
  serviceFee: DS.attr(),                      // 服务费
  features: DS.attr(),

  photos: DS.hasMany('listing/photo'),         // 房源图片
  house: DS.belongsTo('listing/house'),       // 所属的house: house类似组的概念， 存储一些公共信息，如小区地铁等


  wishlist: DS.attr(),                        // 所属心愿单
  status: DS.attr(),                          // 状态：0-未发布；1-已发布

  //creator: DS.belongsTo('profile.user'),    // 创建者（房东）信息: 头像 名称 描述
  creatorId: DS.attr(),                       // 创建者id
  creatorName: DS.attr(),                     // 创建者名称
  creatorPhoto: DS.attr(),                    // 创建者头像
  creatorDescription: DS.attr(),              // 创建者描述

  tenants: DS.hasMany('listing/tenant', {async: true}),
  similarListings: DS.hasMany('listing', {async: true}),    //相似房源

  lowestPrice: Ember.computed('payments', function () {
    var lowestPrice = 0;
    if(!Ember.isEmpty(this.get('payments'))){
      this.get('payments').forEach(function(payment){
        if(lowestPrice == 0 || payment.get('price') < lowestPrice)
          lowestPrice = payment.get('price');
      });
    }

    return lowestPrice;
  }),

  //lowestPrice: Ember.computed('perMonthPrice', 'perThreeMonthPrice', 'perSixMonthPrice', 'perYearPrice', function () {
  //  var lowestPrice = 0;
  //  if(!Ember.isEmpty(this.get('perYearPrice'))){
  //    if(lowestPrice == 0 || (this.get('perYearPrice')< lowestPrice)){
  //      lowestPrice = this.get('perYearPrice')
  //    }
  //  }
  //  if(!Ember.isEmpty(this.get('perSixMonthPrice'))){
  //    if(lowestPrice == 0 || this.get('perSixMonthPrice')< lowestPrice){
  //      lowestPrice = this.get('perSixMonthPrice')
  //    }
  //  }
  //  if(!Ember.isEmpty(this.get('perThreeMonthPrice'))){
  //    if(lowestPrice == 0 || this.get('perThreeMonthPrice')< lowestPrice){
  //      lowestPrice = this.get('perThreeMonthPrice')
  //    }
  //  }
  //  if(!Ember.isEmpty(this.get('perMonthPrice'))){
  //    if(lowestPrice == 0 || this.get('perMonthPrice')< lowestPrice){
  //      lowestPrice = this.get('perMonthPrice')
  //    }
  //  }
  //
  //  return lowestPrice;
  //}),

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

  showPhotos: Ember.computed('photos','house.photos',function () {
    this.get("photos").pushObjects(this.get('house.photos'));
    return this.get("photos");
  }),

  isCalendarFinished: Ember.computed('availableDate', function(){
    var isFinished = !Ember.isEmpty(this.get('availableDate'));
    return isFinished;
  }),

  isOverviewFinished: Ember.computed('isValid','payments.@each.isValid',function(){
    var isFinished = this.get('isValid');

    if(isFinished && !Ember.isEmpty(this.get("payments"))){
      this.get('payments').forEach(payment => {
        if(isFinished && !payment.get('isValid'))
          isFinished = false;
      });

    }
    return isFinished;
  }),

  isPhotoFinished: Ember.computed('photos.length',function(){
    var isFinished = this.get('photos.length') > 0;
    return isFinished;
  }),

  // 发布所需步骤
  listStep: Ember.computed('isCalendarFinished','isOverviewFinished','isPhotoFinished',function(){
    var steps = 3;
    if(this.get("isCalendarFinished")){
      steps--;
    }
    if(this.get("isOverviewFinished")){
      steps--;
    }
    if(this.get("isPhotoFinished")){
      steps--;
    }

    return steps;
  }),

  listStepUrl: Ember.computed('listStep',function(){
    var imageUrl = "";
    if(this.get("listStep") === 1){
      imageUrl = "/images/static/step-1.png";
    }
    if(this.get("listStep") === 2){
      imageUrl = "/images/static/step-2.png";
    }
    if(this.get("listStep") === 3){
      imageUrl = "/images/static/step-3.png";
    }
    if(this.get("listStep") === 4){
      imageUrl = "/images/static/step-4.png";
    }

    return imageUrl;

  })
});
