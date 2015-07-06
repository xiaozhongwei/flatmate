/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin,{
  //name: DS.attr(),                                 // 组名：compound + building + floor
  //type: DS.attr('number'),                         // 创建类型： 0-默认创建，1-用户创建

  validations: {
    area: { presence: true },
    compound: { presence: true },
    building: { presence: true },
    floor: { presence: true },
    //doorplate: { presence: true },
    metroStations: { presence: true },
    size: { presence: true },
    bedrooms: { presence: true },
    bathrooms: { presence: true },
    livingRooms: { presence: true },
    amenities: { presence: true}
  },

  rentType: DS.attr(),                             // 出租方式

  publishStep: DS.attr(),                          //发布步骤

  address: DS.attr(),                              //地址
  area: DS.attr(),                                 // 区域
  compound: DS.attr(),                             // 小区
  building: DS.attr(),                             // 单元
  floor: DS.attr(),                                // 楼层
  doorplate: DS.attr(),                            // 门牌号
  metroStations: DS.attr(),                         // 地铁站名
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

  bedroomEditable: Ember.computed('flatmates.@each.id', function(){
    var editable = true;

    this.get("flatmates").forEach( flatmate => {
      if(editable && !Ember.isEmpty(flatmate.id)){
        editable = false;
      }
    });

    return editable;
  }),

  showName: Ember.computed('area', 'compound', 'building', 'floor', function(){
    return (!Ember.isEmpty(this.get('area')) && !Ember.isEmpty(this.get('compound')) && !Ember.isEmpty(this.get('building'))
              && (!Ember.isEmpty(this.get('floor'))));
  }),

  //isFull: Ember.computed('bedrooms', 'listings', function(){
  //  return this.get('bedrooms') === this.get('listings.length');
  //}),

  isShared: Ember.computed('rentType', function(){
    return this.get('rentType') === "share";
  }),

  isCalendarFinished: Ember.computed('listings.firstObject.availableDate', function(){
    var isFinished = !Ember.isEmpty(this.get('listings.firstObject.availableDate'));
    return isFinished;
  }),
  isDetailFinished: Ember.computed('rentType','bedrooms', 'bathrooms', 'livingRooms', 'size', 'listings.firstObject.isOverviewFinished','amenities.length',function(){
    var isFinished = false;
    if(this.get('rentType') === "share"){
      isFinished = (!Ember.isEmpty(this.get('bedrooms')) && !Ember.isEmpty(this.get('bathrooms')) && !Ember.isEmpty(this.get('livingRooms'))
      && (!Ember.isEmpty(this.get('size'))) && (this.get('amenities.length') > 0));
    }
    else {
      isFinished = (!Ember.isEmpty(this.get('bedrooms')) && !Ember.isEmpty(this.get('bathrooms')) && !Ember.isEmpty(this.get('livingRooms'))
      && (!Ember.isEmpty(this.get('size'))) && (this.get('amenities.length') > 0) && this.get('listings.firstObject.isOverviewFinished'));
    }
    return isFinished;
  }),
  isAddressFinished: Ember.computed('area', 'compound', 'building', 'floor', 'address', 'metroStations', function(){
    return (!Ember.isEmpty(this.get('area')) && !Ember.isEmpty(this.get('compound')) && !Ember.isEmpty(this.get('building'))
    && (!Ember.isEmpty(this.get('floor'))) && (!Ember.isEmpty(this.get('address'))) && (!Ember.isEmpty(this.get('metroStations'))));
  }),
  isPhotoFinished: Ember.computed('rentType','photos.length','listings.firstObject.photos.length',function(){
    var isFinished = false;
    if(this.get('rentType') === "share"){
      isFinished = this.get('photos.length') > 0;
    }
    else {
      isFinished = this.get('listings.firstObject.photos.length') > 0;
    }
    return isFinished;
  }),

  // 发布所需步骤
  listStep: Ember.computed('isCalendarFinished','isDetailFinished','isPhotoFinished','isAddressFinished',function(){
    var steps = 4;
    if(this.get("isCalendarFinished")){
      steps--;
    }
    if(this.get("isDetailFinished")){
      steps--;
    }
    if(this.get("isPhotoFinished")){
      steps--;
    }
    if(this.get("isAddressFinished")){
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

  }),

  isApartmentFinished: Ember.computed("isDetailFinished","isPhotoFinished","isAddressFinished", function(){
    var isFinished = this.get("isDetailFinished") && this.get("isPhotoFinished") && this.get("isAddressFinished");
    return isFinished;
  }),

  isFlatmateFinished: Ember.computed("flatmates.@each.status","flatmates.@each.isValid",function(){
    var finished = true;
    this.get("flatmates").forEach(flatmate => {
      if(finished && flatmate.get("isOccupied") && !flatmate.get("isValid")){
        finished = false;
      }
    });
    return finished;
  }),

  showRooms: Ember.computed('rentType','isApartmentFinished', 'isFlatmateFinished', function(){
    if(this.get('rentType') === "share"){
      var isFinished = this.get('isApartmentFinished') && this.get('isFlatmateFinished');
      return isFinished;
    }
    else{
      return true;
    }
  })

});
