/**
 * Created by Eric on 2015/3/19.
 */
import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
      }
      else {
        $('header').removeClass("sticky");
      }
    });
    this.mobileMenuClick();
    $('.dropdown-menu#login_form').on("click",function(e) {e.stopPropagation();});
  },
  mobileMenuClick:function(){
    $('a.open_close').on("click",function() {
      $('.main-menu').toggleClass('show');
      $('.layer').toggleClass('layer-is-visible');
    });
    $('a.show-submenu').on("click",function() {
      $(this).next().toggleClass("show_normal");
    });
    $('a.show-submenu-mega').on("click",function() {
      $(this).next().toggleClass("show_mega");
    });
  }
});
