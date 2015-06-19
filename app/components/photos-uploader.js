export default EmberUploader.FileField.extend({
  attributeBindings: ['name','style','id'],
  name: "",
  multiple: true,
  url: "",
  filesDidChanged: (function() {
    var uploadUrl = this.get('url');
    var files = this.get("files");

    var uploader = EmberUploader.Uploader.create({
      url: uploadUrl
    });
    if (!Ember.isEmpty(files)) {
      var promise = uploader.upload(files);
      promise.then(response => {
        this.sendAction('uploadSuccess', response['listing/photos']);
      });
      promise['catch'](response => {
        Ember.debug("file upload failure.");
        this.sendAction('uploadFail');
      });
    }
  }).observes("files")
});
