/**
 * Created by lxj on 3/10/2015.
 */
import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  status: DS.attr('',{defaultValue: 'unpaid'}),     //未付：unpaid 已付：paid
  transactionDate: DS.attr('formatDate'),           //交易日期
  account: DS.attr(),                               //金额
  remark: DS.attr(),                                 //备注

  enablePay: Ember.computed('transactionDate', 'account',function(){
    return !Ember.isEmpty(this.get('transactionDate')) && !Ember.isEmpty(this.get('account'));
  }),
  isPaid: Ember.computed('status',function(){
    return this.get('status') === 'paid';
  }),

  statusObserve:function() {
    if(this.get('isDirty'))
      Ember.run.once(this, 'changeStatus');
  }.observes('transactionDate', 'account').on('change'),

  changeStatus: function(){
    if(this.get('status') === 'paid'){
      this.set('status', 'unpaid');
    }
  }
});

//TransactionRecord.reopen({
//  statusObserve:function() {
//    alert(12);
//    Ember.run.once(this, 'changeStatus');
//  }.observes('transactionDate', 'account'),
//
//  changeStatus: function(){
//    if(this.get('status') === 'paid'){
//      this.set('status', 'unpaid');
//    }
//  }
//});
