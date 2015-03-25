/**
 * Created by lxj on 3/10/2015.
 */
import DS from 'ember-data';

export default DS.Model.extend({
    sender: DS.attr(),
    senderName: DS.attr(),
    senderPhoto: DS.attr(),
    receiver: DS.attr(),
    receiverName: DS.attr(),
    receiverPhoto: DS.attr(),
    listingId:DS.attr(),
    listingTitle:DS.attr(),
    content: DS.attr(),
    createTime: DS.attr(),
    status: DS.attr()
});
