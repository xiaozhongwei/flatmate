/**
 * Created by Eric on 2015/3/21.
 */
import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function () {
    this.get('controller').on('openTenantBox', this, this.show_Tenant_box);
  },
  show_Tenant_box: function(){
    $('.edit-tenant-time-box').fadeIn(300);
    $('.overlay-full-screen').fadeIn(150);
    $('body').addClass('slideout-2');
  }
});
