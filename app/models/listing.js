/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';

export default DS.Model.extend({
  availableDate: DS.attr(),                   // 可入住时间

  title: DS.attr(),
  description: DS.attr(),
  perMonthPrice: DS.attr(),
  perThreeMonthPrice: DS.attr(),
  perSixMonthPrice: DS.attr(),
  perYearPrice: DS.attr(),
  deposit: DS.attr(),
  features: DS.attr(),

  //basic: DS.belongsTo('listing/basic'),
  photos: DS.hasMany('listing/photo'),         // 房源图片
  house: DS.belongsTo('listing/house'),       // 所属的house: house类似组的概念， 存储一些公共信息，如小区地铁等


  status: DS.attr(),                          // 状态：0-未发布；1-已发布

  //creator: DS.belongsTo('profile.user'),    // 创建者（房东）信息: 头像 名称 描述
  creatorId: DS.attr(),                       // 创建者id
  creatorName: DS.attr(),                     // 创建者名称
  creatorPhoto: DS.attr(),                    // 创建者头像
  creatorDescription: DS.attr(),              // 创建者描述

  //published: function () {
  //  return this.get('status') === 1;
  //}.property('status'),

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
