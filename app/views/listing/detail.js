/**
 * Created by Eric on 2015/3/21.
 */
import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    $('#Img_carousel' ).sliderPro({
      width: 960,
      height: 500,
      fade: true,
      arrows: true,
      buttons: false,
      fullScreen: false,
      smallSize: 500,
      startSlide: 0,
      mediumSize: 1000,
      largeSize: 3000,
      thumbnailArrows: true,
      autoplay: false
    });
  }
});
