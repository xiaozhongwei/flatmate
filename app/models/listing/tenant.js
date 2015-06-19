/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin,{
  validations: {
    country: { presence: true },
    gender: { presence: true },
    occupation: { presence: true }
  },

  index: DS.attr(),
  name: DS.attr(),                                //名称
  idNumber: DS.attr(),                            //身份证号
  //status: DS.attr('number', {defaultValue: 1}), //状态
  houseId: DS.attr(),
  listingId: DS.attr(),                           //关联的房源信息
  country: DS.attr(),                             //国家
  gender: DS.attr('', {/*defaultValue: '1'*/}),   //性别
  occupation: DS.attr(),                          //职业
  email: DS.attr(),                               //邮箱
  phone: DS.attr(),                               //phone
  contractStartDate: DS.attr(),                   //合同开始日期
  contractEndDate: DS.attr(),                     //合同结束日期
  checkoutDate: DS.attr(),                        //checkout日期

  paymentCycle: DS.attr(),                        //付款周期
  deposit: DS.attr(),                             //押金
  price: DS.attr(),                               //价格
  advanceDay: DS.attr(),                          //提前天数

  records: DS.hasMany('listing/transactionRecord')//付款记录
});
