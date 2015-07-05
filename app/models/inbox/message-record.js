/**
 * Created by lxj on 3/10/2015.
 */
import DS from 'ember-data';
import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default DS.Model.extend(EmberValidations.Mixin,{
  validations: {
    checkinDate: { presence: true },
    livingMonth: { presence: true },
    guestNumber: { presence: true },
    payCycleMapping: { presence: true },
    content: { presence: true }
  },

  sender: DS.attr(),
  senderName: DS.attr(),
  senderPhoto: DS.attr(),
  receiver: DS.attr(),
  receiverName: DS.attr(),
  receiverPhoto: DS.attr(),

  checkinDate: DS.attr('formatDate'),
  livingMonth: DS.attr(),
  guestNumber: DS.attr(),
  payCycleMapping: DS.attr(),
  price: DS.attr(),

  listingId: DS.attr(),
  listingTitle: DS.attr(),
  content: DS.attr(),
  createTime: DS.attr(),
  status: DS.attr(),

  mark: DS.attr()   //true - 显示咨询房间
});
