import Ember from 'ember';
import Notify from 'ember-notify';

export default Ember.Controller.extend({
  newMessageContent: "",
  actions: {
    saveMessage: function(){
      if(!Ember.isEmpty(this.get("newMessageContent"))){
        var _this = this;
        var newMessage = this.store.createRecord("inbox/messageRecord",{listingId: this.get("model.listingId"),listingTitle: this.get("model.listingTitle"),content: this.get("newMessageContent"),
          sender: this.get("currentUser.id"), senderName: this.get("currentUser.firstName"), senderPhoto: this.get("currentUser.logo.downloadFilePath"),
          receiver: this.get("model.speaker"), receiverName: this.get("model.speakerName"), receiverPhoto: this.get("model.speakerPhoto")});

        newMessage.save().then(message => {
            this.set("newMessageContent","");
            Notify.info('消息发送成功');

            var promise = this.get("model").reload();

            promise.then(model=>{
                if(!Ember.isEmpty(model.get("records"))){
                  model.get("records").forEach(function(record){
                    if(record.get("sender") === _this.session.get("id")){
                      record.set("isSender", true)
                    }
                  })
                }
              }, function() {
                Ember.Logger.error("消息刷新失败。");
              }
            );
        },function() {
            Ember.Logger.error("消息发送失败。");
        }
      )}
      else{
        Notify.warning('Message can not be blank！');
      }
    }
  }
});
