/**
 * Created by Eric on 2015/3/21.
 */
import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    this.get('controller').on('openAddressBox', this, this.show_address_box);
  },
  show_address_box: function(){
    $('.address-box').css('display', 'block');
    $('.overlay-full-screen').css('display', 'block');
  }
});
