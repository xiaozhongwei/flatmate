/**
 * Created by Eric on 2015/3/19.
 */
import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    //头自动隐藏
    $(window).scroll(function(){
      var _width = $(window).width();
      if (_width >= 768) {
        var scroll_top = $('.nav-top').offset().top;
        if (scroll_top > 60) {
          $('.nav-top').fadeOut();
        } else {
          $('.nav-top').stop(true).fadeIn();
        }
      }
    });

    $.each($('.main-slide .slide-img'), function (index, value) {
      if(index == 0){
        $(this).css('display', 'block');
      } else {
        $(this).css('display', 'none');
      }
    });
    setInterval(function () {
      var _length = $('.main-slide .slide-img').length;
      var _pos = 0;
      var _next = 0;
      $.each($('.main-slide .slide-img'), function (index, value) {
        if($(this).css('display') == 'block'){
          _pos = index;
        }
      });
      if(_pos + 1 < _length){
        _next = _pos + 1;
      }else{
        _next = 0;
      }
      $.each($('.main-slide .slide-img'), function (index, value) {
        if (index == _next){
          $(this).fadeIn();
        }
        if (index == _pos){
          $(this).fadeOut();
        }
      });
    }, 10*1000);
  }

});
