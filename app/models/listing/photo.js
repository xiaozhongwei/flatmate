/**
 * Created by Eric on 2014/11/17.
 */
import DS from 'ember-data';

export default DS.Model.extend({
    index: DS.attr(),
    description: DS.attr(),
    downloadFilePath: DS.attr(),

    style: function(){
        return "background-image:url('" + this.get("downloadFilePath") + "')";
    }.property('downloadFilePath')
});
