/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';

export default DS.Model.extend({
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
  })
});
