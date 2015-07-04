import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    $('.expand').click(function () {
      $('.single-apt').removeClass('collapsed');
      $(this).css('display', 'none');
      $('.close-all').css('display', 'block');
    });
    $('.close-all').click(function () {
      $('.single-apt').addClass('collapsed');
      $('.single-apt').find('.tenant-list').css('display', 'none');
      $('.single-apt').find('.tenant-manage').removeClass('active');
      $(this).css('display', 'none');
      $('.expand').css('display', 'block');
    });
    $('.single-apt .apt-header .triangle').click(function () {
      var _single_apt = $(this).parents('.single-apt');
      if (_single_apt.hasClass('collapsed')){
        _single_apt.removeClass('collapsed');
      } else {
        _single_apt.addClass('collapsed');
        _single_apt.find('.tenant-list').css('display', 'none');
        _single_apt.find('.tenant-manage').removeClass('active');
      }
    });

    //$('.tenant-manage a').click(function () {
    //  if ($(this).parents('.tenant-manage').hasClass('active')){
    //    $(this).parents('.tenant-manage').removeClass('active');
    //  }else{
    //    $(this).parents('.tenant-manage').addClass('active');
    //  }
    //
    //  var _tenant_list = $(this).parents('.apt-container').siblings('.tenant-list');
    //  if (_tenant_list.css('display') == 'none') {
    //    _tenant_list.css('display', 'block');
    //  }else{
    //    _tenant_list.css('display', 'none');
    //  }
    //});

    //$('.tenant-list .btn-edit').click(function () {
    //  $('.edit-tenant-profile').css('display', 'block');
    //  $('.overlay-full-screen').css('display', 'block');
    //});
    $('.remove').click(function () {
      $(this).parent('.single-tenant').remove();
    });

    $('.sub-nav li').click(function () {
      $('.sub-nav li').removeClass('active');
      $(this).addClass('active');
    });

    // dialog nav
    $('.dialog-box.basic-listing-room .op-circle').click(function() {
      if($(this).hasClass('active')){
        return false;
      }
      else{
        $(this).parents('.dialog-box').fadeOut(200);
      }
      //if($(this).hasClass('nav-personal-info')) {
      //  $(this).parents('.dialog-box').fadeOut(200);
      //  $('.personal-info-box').fadeIn(300);
      //}
      //if($(this).hasClass('nav-contract')) {
      //  $(this).parents('.dialog-box').fadeOut(200);
      //  $('.contract-box').fadeIn(300);
      //}
      //if($(this).hasClass('nav-payment-circle')) {
      //  $(this).parents('.dialog-box').fadeOut(200);
      //  $('.payment-circle-box').fadeIn(300);
      //}
    });

    this.get('controller').on('openProfileBox', this, this.show_profile_box);
    this.get('controller').on('openContractBox', this, this.show_contract_box);
    this.get('controller').on('openPaymentBox', this, this.show_payment_box);
  },

  show_profile_box: function(){
    $('.personal-info-box').fadeIn(300);
    $('.overlay-full-screen').fadeIn(150);
    $('body').addClass('slideout-2');
  },

  show_contract_box: function(){
    $('.contract-box').fadeIn(300);
    $('.overlay-full-screen').fadeIn(150);
    $('body').addClass('slideout-2');
  },

  show_payment_box: function(){
    $('.payment-circle-box').fadeIn(300);
    $('.overlay-full-screen').fadeIn(150);
    $('body').addClass('slideout-2');
  }

});
