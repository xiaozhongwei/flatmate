/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';

export default DS.Model.extend({
    coordinate: DS.attr(),      //坐标
    description: DS.attr()      //地理位置描述： 便捷小区内，离某某地铁站仅需步行五分钟
});
