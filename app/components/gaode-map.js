import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  containerId: 'address_map',
  lat: null,
  long: null,
  lang: 'zh_en',
  didInsertElement() {
    var _this = this;
    var position = new AMap.LngLat(121.498586, 31.239637);
    var mapObj=new AMap.Map(_this.get('containerId'),{
      view: new AMap.View2D({//创建地图二维视口
        center:position,//创建中心点坐标
        zoom:15, //设置地图缩放级别
        rotation:0 //设置地图旋转角度
      }),
      lang:_this.get('lang')//设置地图语言类型
    });//创建地图实例

  }
});
