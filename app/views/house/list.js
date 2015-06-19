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
      $(this).css('display', 'none');
      $('.expand').css('display', 'block');
    });
    $('.single-apt .apt-header .triangle').click(function () {
      var _single_apt = $(this).parents('.single-apt');
      if (_single_apt.hasClass('collapsed')){
        _single_apt.removeClass('collapsed');
      } else {
        _single_apt.addClass('collapsed');
      }
    });
    $('.tenant').click(function () {
      var _tenant_list = $(this).parents('.apt-container').siblings('.tenant-list');
      if (_tenant_list.css('display') == 'none') {
        _tenant_list.css('display', 'block');
      }else{
        _tenant_list.css('display', 'none');
      }
    });
    //$('.tenant-list .btn-edit').click(function () {
    //  $('.edit-tenant-profile').css('display', 'block');
    //  $('.overlay-full-screen').css('display', 'block');
    //});
    $('.remove').click(function () {
      $(this).parent('.single-tenant').remove();
    });

    this.get('controller').on('openTenantBox', this, this.show_tenant_box);
  },

  show_tenant_box: function(){
    $('.edit-tenant-profile').css('display', 'block');
    $('.overlay-full-screen').css('display', 'block');
    $('body').addClass('slideout-2');
  }
});
