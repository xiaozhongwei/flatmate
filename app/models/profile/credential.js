/**
 * Created by xiaozwei on 4/25/2014.
 */
import DS from 'ember-data';

export default DS.Model.extend({
    userName : DS.attr(),
    password : DS.attr(),
    grant_type: DS.attr("string",{defaultValue:"password"}),
    token_type : DS.attr(),
    accessToken: DS.attr(),
    authorization: function() {
        return this.get("token_type")+" "+this.get("accessToken");
    }.property("accessToken","token_type")
});
