/**
 * Created by Eric on 2015/3/21.
 */
import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    $('.add-payment').click(function () {
      $('.payment-box').css('display', 'block');
      $('body').addClass('slideout-2');
      $('.overlay-full-screen').css('display', 'block');
    });
  }
});
