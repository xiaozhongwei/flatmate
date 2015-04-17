/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';

export default DS.Model.extend({
  //name: DS.attr(),                                 // 组名：compound + building + floor
  //type: DS.attr('number'),                         // 创建类型： 0-默认创建，1-用户创建

  rentType: DS.attr(),                             // 出租方式

  area: DS.attr(),                                 // 区域
  compound: DS.attr(),                             // 小区
  building: DS.attr(),                             // 单元
  floor: DS.attr(),                                // 楼层
  doorplate: DS.attr(),                            // 门牌号
  metroStation: DS.attr(),                         // 地铁站名
  subwayLines: DS.attr(),                          // 地铁线名
  size: DS.attr(),                                 // 面积


  bedrooms: DS.attr(),                     // 卧室数目
  bathrooms: DS.attr(),                    // 卫生间数目
  livingRooms: DS.attr(),                  // 客厅数目

  createDate: DS.attr(),                           // 创建日期

  amenities: DS.attr(),                            // 设施
  //amenities: DS.belongsTo('listing/amenity'),    // 设施

  flatmates: DS.hasMany('listing/flatmate'),       // 室友信息
  photos: DS.hasMany('listing/photo'),             // 公告照片
  contact: DS.belongsTo('listing/contact'),        // 联系信息
  location: DS.belongsTo('listing/location'),      // 位置信息

  listings: DS.hasMany('listing', {async: true}),  // 房源信息： 一个house里可以有多个房源信息

  isExpand: false,

  //availableDate: Ember.computed.alias('listings.firstObject.availableDate'),

  name: Ember.computed('area', 'compound', '', function(){
    return null;
  }),

  isFull: Ember.computed('bedrooms', 'listings', function(){
    return this.get('bedrooms') === this.get('listings.length');
  }),

  isShared: Ember.computed('rentType', function(){
    return this.get('rentType') === "share";
  })
});
