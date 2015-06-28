/**
 * Created by Liu Xiao Jie on 2015/6/28.
 */
import DS from 'ember-data';

export default DS.ModelFragment.extend({
  cycle: DS.attr(),      //周期
  price: DS.attr()       //价格
});
