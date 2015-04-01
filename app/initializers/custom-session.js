import Session from 'simple-auth/session';

export function initialize(container, application) {
  Session.reopen({
    user: function() {
      var user_id = this.get('id');
      if (!Ember.isEmpty(user_id)) {
        return container.lookup('store:main').find('profile/user', user_id);
      }
    }.property('id')
  });
}

export default {
  name: 'custom-session',
  before: 'simple-auth',
  initialize: initialize
};
