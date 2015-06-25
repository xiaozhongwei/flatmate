/**
 * Created by Eric on 2015/3/21.
 */
import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    $('#Img_carousel' ).sliderPro({
      width: 960,
      height: 567,
      fade: true,
      arrows: true,
      buttons: false,
      fullScreen: true,
      smallSize: 567,
      startSlide: 0,
      mediumSize: 1000,
      largeSize: 3000,
      thumbnailArrows: true,
      autoplay: false
    });
    /*$('#img_carousel' ).sliderPro({
      width: '23%',
      visibleSize: '100%',
      height: 400,
      fade: true,
      arrows: true,
      buttons: false,
      fullScreen: false,
      startSlide: 0,
      thumbnailArrows: true,
      centerImage: false,
      autoplay: false
    });*/
    $(".numbers-row").append('<div class="inc button_inc">+</div><div class="dec button_inc">-</div>');
    $(".button_inc").on("click", function () {

      var $button = $(this);
      var oldValue = $button.parent().find("input").val();

      if ($button.text() == "+") {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 1) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 1;
        }
      }
      $button.parent().find("input").val(newVal);
    });
  }
});
