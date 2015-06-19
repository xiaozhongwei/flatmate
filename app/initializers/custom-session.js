import Session from 'simple-auth/session';

export function initialize(container, application) {
  Session.reopen({
    user: function() {
      var user_id = this.get('id');
      if (!Ember.isEmpty(user_id)) {
        return container.lookup('store:main').find('profile/user', user_id);
      }
    }.property('id')
    //,
    //unreadMessages: function() {
    //  var user_id = this.get('id');
    //  if (!Ember.isEmpty(user_id)) {
    //    var messages = container.lookup('store:main').find('inbox/message', {page: 1, size: 10, status: "unread"});
    //
    //    messages.then(res => {
    //      this.set("unreadMessages.totalCount", res.get("meta.totalCount"));
    //    });
    //
    //    return messages;
    //  }
    //}.property('id')

  });
}

export default {
  name: 'custom-session',
  before: 'simple-auth',
  initialize: initialize
};
