/**
 * Created by lxj on 3/10/2015.
 */
import DS from 'ember-data';

export default DS.Model.extend({
  speaker: DS.attr(),
  speakerName: DS.attr(),
  speakerPhoto: DS.attr(),

  checkinDate: DS.attr(),
  livingMonth: DS.attr(),
  guestNumber: DS.attr(),
  payCycleMapping: DS.attr(),
  price: DS.attr(),

  listingId: DS.attr(),
  listingTitle: DS.attr(),
  lastContent: DS.attr(),
  lastUpdateTime: DS.attr(),
  unReadMark: DS.attr(),        // 0-以读, 1-未读
  records: DS.hasMany('inbox/messageRecord'),

  didLoad: function(){
    this.set("totalCount", this.get("content.meta.totalCount"));
  }
});
