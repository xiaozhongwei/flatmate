/**
 * Created by Eric on 2015/3/21.
 */
import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    //$('.btn-list-room').click(function () {
    //  if($(this).attr('disabled')){
    //    return;
    //  }
    //  $('.show-room-box').css('display', 'block');
    //  $('.overlay-full-screen').css('display', 'block');
    //});

    this.get('controller').on('showRoomBox', this, this.show_room_box);
  },

  show_room_box: function() {
    $('.show-room-box').css('display', 'block');
    $('.overlay-full-screen').css('display', 'block');
  }
});
