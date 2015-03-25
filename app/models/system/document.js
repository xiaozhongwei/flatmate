/**
 * Created by xiaozwei on 5/8/2014.
 */
import DS from 'ember-data';

export default DS.Model.extend({
    businessType : DS.attr(), //业务类型
    name: DS.attr(),
    documentId : DS.attr(), //ID
    fileName : DS.attr(),     //文件名称
    fileType : DS.attr(),     //文件类型
    filePath : DS.attr(),     //文件路径
    resourcesId : DS.attr(),  //文件ID
    description:DS.attr(),    //文件描述,
    downloadFilePath : DS.attr(),
    //downloadFilePath : function() {
    //    return window.ENV.host + "/" + window.ENV.downloadHost + "/" + this.get('id');
    //}.property('id'),
    serialize : function(options) {
        var json = this._super(options);
        json.id=this.id;
        return json;
    }
});
