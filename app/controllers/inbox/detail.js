import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  newMessageContent: "",
  actions: {
    saveMessage: function(){
      if(!Ember.isEmpty(this.get("newMessageContent"))){
        var newMessage = this.store.createRecord("inbox/messageRecord",{listingId: this.get("model.listingId"),listingTitle: this.get("model.listingTitle"),content: this.get("newMessageContent"),
          sender: this.get("currentUser.id"), senderName: this.get("currentUser.fullName"), senderPhoto: this.get("currentUser.logo.downloadFilePath"),
          receiver: this.get("model.speaker"), receiverName: this.get("model.speakerName"), receiverPhoto: this.get("model.speakerPhoto")});

        newMessage.save().then($.proxy(function(message) {
          this.set("newMessageContent","");
          Notify.info('消息发送成功');
          this.get("model").reload();
        }, this), function() {
          Ember.Logger.error("消息发送失败。");
        });
      }
      else{
        Notify.warning('不能发送空的信息！');
      }
    }
  }
});
