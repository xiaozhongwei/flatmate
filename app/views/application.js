/**
 * Created by Eric on 2015/3/20.
 */
import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    this.get('controller').on('closeModalBox', this, this.hide_dialog_box);
  },

  // 关闭所有的框
  hide_dialog_box: function() {
    $('.dialog-box').css('display', 'none');
    $('.overlay-full-screen').css('display', 'none');
    $('body').removeClass('slideout-2');
    //清空所有输入, 按钮置为disabled
    //$.each($('.dialog-form').find('input'), function (index, value) {
    //  value.value = '';
    //});
    //$('.dialog-form').find('button').attr('disabled', true);
  }

});
