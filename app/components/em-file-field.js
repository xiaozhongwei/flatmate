export default EmberUploader.FileField.extend({
    attributeBindings: ['name','style','id'],
    name: "",
    url: "",
    filesDidChanged: (function() {
        var uploadUrl = this.get('url'), _this = this;
        var files = this.get("files");

        var uploader = EmberUploader.Uploader.create({
            url: uploadUrl
        });
        if (!Ember.isEmpty(files)) {
            var promise = uploader.upload(files[0]);
            promise.then(function(response) {
                _this.get("document").setProperties({
                    id:response.upload.documentId,
                    documentId:response.upload.documentId,
                    fileName:files[0].name,
                    downloadFilePath: response.upload.downloadFilePath
                });
            });
            promise['catch'](function() {
                Ember.debug("file upload failure.");
            });
        }
    }).observes("files")
});
