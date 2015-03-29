export default  Ember.Mixin.create({
    mapping : [],
    deserialize : function(serialized) {
        if ( Ember.isEmpty(serialized) )
            return serialized;
        var results = this.mapping.filterBy("index", serialized);
        if ( results.length === 1 )
            return results[0];
        else{
            Ember.debug("error, the index:" + serialized);
        }
    },
    serialize : function(deserialized) {
        if ( Ember.isEmpty(deserialized) )
            return deserialized;
        var results = this.mapping.filterBy("name", deserialized.name);
        if ( results.length === 1 )
            return results[0].index;
    },
    getByName : function(name) {
        var results = this.mapping.filterBy("name", name);
        if ( results.length === 1 )
            return results[0];
    },
    getByIndex : function(index) {
        var results = this.mapping.filterBy("index", index);
        if ( results.length === 1 )
            return results[0];
    },
    getByGroup : function(groupName) {
        var results = this.mapping.filterBy("group", groupName);
        return results;
    }
});
