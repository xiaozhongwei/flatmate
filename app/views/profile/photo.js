/**
 * Created by Eric on 2015/3/21.
 */
import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    $('#btn_add_photo').click(function () {
      $('#upload_photo').click();
    });
  }
});
