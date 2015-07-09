/**
 * Created by Eric on 2015/3/19.
 */
import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    var _this = this;
    $(window).resize(function () {
      var _height = $(window).height();
      var _width = $(window).width();
      $('.resp-left-menu').css('display', 'none');
      if (_width < 768 ) {
        $('.nav-top').css('display', 'block');
      }
    });

    //$(window).scroll(function(){
    //  var _width = $(window).width();
    //  if (_width >= 768) {
    //    var scroll_top = $('.nav-top').offset().top;
    //    if (scroll_top > 60) {
    //      $('.nav-top').fadeOut();
    //    } else {
    //      $('.nav-top').stop(true).fadeIn();
    //    }
    //  }
    //});

    //$('#user_profile_dp').hover(function () {
    //  $('.dropdown-user-profile').stop(true).fadeIn();
    //});
    //
    //$('#user_profile_dp').click(function () {
    //  $('.dropdown-user-profile').stop(true).fadeIn();
    //});

    $('.resp-nav-left').click(function () {
      var _menu = $('.resp-left-menu');
      var _overlay = $('.overlay-full-screen');
      var _width = _menu.width();
      $('body').addClass('slideout');
      _menu.css('left', -_width).css('display', 'block');
      _menu.animate({'left': 0}, 200);
      _overlay.css('display', 'block');
    });

    $('.overlay-full-screen').click(function () {
      var screen_width = $(window).width();
      if (screen_width < 768){
        $(this).css('display', 'none');
        _this.hide_left_menu();
        _this.hide_dialog_box();
        $('body').removeClass('slideout');
        _this.body_remove_no_float();
      }else{
        _this.hide_dialog_box();
        _this.body_remove_no_float();
      }
    });

    $('.sign_up_link').click(function () {
      _this.show_reg_box();
      _this.hide_left_menu();
    });

    $('.login_link').click(function () {
      _this.show_login_box();
      _this.hide_left_menu();
    });

    $('.login-type-select .col-2.phone-reg-tab').click(function () {
      _this.reg_box_switch('phone');
    });
    $('.login-type-select .col-2.mail-reg-tab').click(function () {
      _this.reg_box_switch('email');
    });

    $('.login-box .nav-reg').click(function () {
      $('#reg_box').fadeIn(200);
      $('#login_box').fadeOut(200);
    });

    $('.login-box .nav-login').click(function () {
      $('#login_box').fadeIn(200);
      $('#reg_box').fadeOut(200);
    });

    $('.login-box .nav-forget').click(function () {
      $('#forget_box').fadeIn(200);
      $('#login_box').fadeOut(200);
    });

    //$('#forget_box .btn-reset').click(function () {
    //  //判断是手机号
    //  $('.login-box .phone-valid').css('display', 'block');
    //});


    $('.alert-box .remove img').click(function () {
      $(this).parents('.alert-box').css('display', 'none');
    });

    $('.auto-dialog-box').click(function (e) {
      var _is_contains = false;
      $.each($('.box-content'), function (index, value) {
        if ($.contains($(this)[0], e.target)){
          _is_contains = true;
        }
      });
      if (!_is_contains){
        $(this).fadeOut(200);
        $('.overlay-full-screen').css('display', 'none');
        $('body').removeClass('slideout');
        _this.body_remove_no_float();
      }
    });

    $('.auto-dialog-box input').keyup(function () {
      var input_list = $(this).parent('.auto-dialog-box').find('input');
      var _button = $(this).parent('.auto-dialog-box').find('button');
      var is_all_input = true;
      var exist_one_empty = false;
      $.each(input_list, function (index, value) {
        if (value.value == '') {
          is_all_input = false;
          exist_one_empty = true;
        }
      });
      if (is_all_input) {
        _button.attr('disabled', false);
      }
      if (exist_one_empty) {
        _button.attr('disabled', true);
      }
    });

    this.get('controller').on('closeModalBox', this, this.hide_auto_dialog_box);
  },

  willClearRender: function(){
    this.get('controller').off('closeModalBox', this, this.hide_auto_dialog_box);
  },

  // 登录注册框切换
  //login_box_switch: function(op) {
  //  if (op == 'login') {
  //    $('.login-box .login-tab .tab.login').addClass('active');
  //    $('.login-box .login-tab .tab.sign-up').removeClass('active');
  //    $('#login_form').css('display', 'block');
  //    $('#register_form').css('display', 'none');
  //
  //  } else if (op == 'signup') {
  //    $('.login-box .login-tab .tab.sign-up').addClass('active');
  //    $('.login-box .login-tab .tab.login').removeClass('active');
  //    $('#register_form').css('display', 'block');
  //    $('#login_form').css('display', 'none');
  //  }
  //},

  // 登录注册框切换
  reg_box_switch: function(op) {
    if (op == 'phone') {
      $('.login-type-select .col-2.phone-reg-tab').addClass('active');
      $('.login-type-select .col-2.mail-reg-tab').removeClass('active');
      $('#phone_reg').css('display', 'block');
      $('#mail_reg').css('display', 'none');

    } else if (op == 'email') {
      $('.login-type-select .col-2.mail-reg-tab').addClass('active');
      $('.login-type-select .col-2.phone-reg-tab').removeClass('active');
      $('#mail_reg').css('display', 'block');
      $('#phone_reg').css('display', 'none');
    }
  },

  body_remove_no_float: function() {
    $('body').removeClass('slideout-2');
  },

  // 打开登录/注册框
  show_login_box: function() {
    $('#login_box').fadeIn(300);
    $('body').addClass('slideout-2');
  },

  show_reg_box: function() {
    $('#reg_box').fadeIn(300);
    $('body').addClass('slideout-2');
  },

  // 注册完成框
  show_reg_success_box: function(){
    $('.login-box').css('display', 'none');
    $('.reg-success-box').css('display', 'block');
    $('.overlay-full-screen').css('display', 'block');
    $('body').addClass('slideout-2');
  },

  //// 打开忘记密码框
  //show_forget_pwd_box: function() {
  //  $('.login-box').css('display', 'none');
  //  $('.forget-box').css('display', 'block');
  //  $('.overlay-full-screen').css('display', 'block');
  //  $('body').addClass('slideout-2');
  //},
  //
  //// 打开重置密码框
  //show_reset_pwd_box: function() {
  //  $('.reset-box').css('display', 'block');
  //  $('.overlay-full-screen').css('display', 'block');
  //  $('body').addClass('slideout-2');
  //},



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
  },

  hide_auto_dialog_box: function(){
    $('.auto-dialog-box').fadeOut(200);
    $('.overlay-full-screen').fadeOut(200);
  },

  hide_left_menu: function() {
    var _menu =$('.resp-left-menu');
    var _width = _menu.width();
    _menu.animate({'left': -_width}, 200, function () {
      _menu.css('display', 'none');
    });
  }
}
);
