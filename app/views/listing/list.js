/**
 * Created by Eric on 2015/3/21.
 */
import Ember from "ember";
import Notify from 'ember-notify';

export default Ember.View.extend({
  didInsertElement: function () {
    Notify.info('Hello there!');
    Notify.alert('This is an alert.');
    Notify.success('It worked.');
    Notify.warning('Hmmn, that didn\'t work out.');

    $('.parallax-window').parallax({});
  }
});
