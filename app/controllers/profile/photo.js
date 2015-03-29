import Ember from 'ember';
import config from 'flatmate/config/environment';

export default Ember.Controller.extend({
  _profileTitle: "Upload Photo",
  uploadUrl : config.uploadHost
});
