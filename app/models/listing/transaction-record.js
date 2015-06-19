/**
 * Created by lxj on 3/10/2015.
 */
import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    transactionDate: DS.attr(),             //交易日期
    account: DS.attr()                      //金额
});
