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

    $(window).scroll(function () {
      var room_price_offset = $('#room_price_suspend').offset().top;
      var room_price_height = $('#room_price_suspend').height();
      var scroll_height = $('body').scrollTop();
      var room_mate_height = $('#room_mate_suspend').height();
      var room_mate_offset = $('#room_mate_suspend').offset().top;
      var detail_map_offset = $('.detail-map').offset().top;
      if (scroll_height > room_price_offset - 25) {
        $('#room_price_suspend').addClass('suspend');
      }
      if (scroll_height <= room_mate_height + room_mate_offset) {
        $('#room_price_suspend').removeClass('suspend');
      }

      if (scroll_height > detail_map_offset - room_price_height - 25 ){
        $('#room_price_suspend').css('top', -(scroll_height - detail_map_offset + room_price_height + 25))
      }
    });

    //$('.wishlist').click(function () {
    //  add_wishlist();
    //});
    //
    //function add_wishlist(){
    //  $('.wishlist img').attr('src', '../static/images/liked.png')
    //}
    //
    //function remove_wishlist(){
    //  $('.wishlist img').attr('src', '../static/images/like.png')
    //}

    $(".roommate-container").owlCarousel({
      autoPlay: false,
      navigation: false,
      pagination: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      items: 4,
      itemsDesktop: [1190,4],
      itemsDesktopSmall : [976,4],
      itemsTablet: [768,4],
      itemsTabletSmall: false,
      itemsMobile : [479,4],
      autoWidth: true,
      scrollPerPage: true
    });

    $('.room-mate .nav-left').click(function () {
      var owl = $(this).parent().find('.roommate-container').data('owlCarousel');
      owl.prev();
    });
    $('.room-mate .nav-right').click(function () {
      var owl = $(this).parent().find('.roommate-container').data('owlCarousel');
      owl.next();
    });

    //$('.btn-contact').click(function () {
    //  show_inquiry_box();
    //});
    //$('.inquery').click(function () {
    //  show_inquiry_box();
    //});

    $('.inquiry-form textarea').keyup(function () {
      var _button = $(this).parent('.inquiry-form').find('button');
      if($(this)[0].value == ''){
        _button.attr('disabled', true);
      }else{
        _button.attr('disabled', false);
      }
    });

    this.get('controller').on('openInquiryBox', this, this.show_inquiry_box);
  },

  // 打开inquiry对话框
  show_inquiry_box: function() {
    $('.inquiry-box').css('display', 'block');
    $('.overlay-full-screen').css('display', 'block');
  }
});
