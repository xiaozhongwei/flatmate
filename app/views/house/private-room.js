import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    $(window).scroll(function () {
      var nav_height = $('.nav-index-top').height();
      var scroll_top = $('body').scrollTop();
      if (scroll_top > nav_height) {
        $('.flat-detail-bar').addClass('fixed');
        $('.main-container .edit-container .left-nav').addClass('fixed');
        $('.main-container .edit-container .edit-area').addClass('fixed');
      }else {
        $('.flat-detail-bar').removeClass('fixed');
        $('.main-container .edit-container .left-nav').removeClass('fixed');
        $('.main-container .edit-container .edit-area').removeClass('fixed');
      }
    });
  }
});
