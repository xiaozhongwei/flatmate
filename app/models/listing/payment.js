/**
 * Created by Liu Xiao Jie on 2015/6/28.
 */
import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.ModelFragment.extend(EmberValidations.Mixin,{
  validations: {
    cycle: { presence: true },
    price: { presence: true, numericality: { onlyInteger: true}}
  },

  cycle: DS.attr(),      //周期
  price: DS.attr()       //价格
});
