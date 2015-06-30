/**
 * Created by lxj on 3/10/2015.
 */
import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  paymentDate: DS.attr(),                  //付款日期
  account: DS.attr(),                      //金额

  transactionRecords: DS.hasMany('listing/transactionRecord'),

  balance: Ember.computed('account','transactionRecords.@each.account', function(){
    var total = 0;

    if(!Ember.isEmpty(this.get('transactionRecords'))){
      this.get("transactionRecords").forEach( record => {
        if(!Ember.isEmpty(record.get('account'))){
          total = total + parseFloat(record.get('account'));
        }
      });
    }


    return parseFloat(this.get('account')) - parseFloat(total);
  })
});
