/**
 * Created by Eric on 2015/3/21.
 */
import Ember from "ember";

export default Ember.View.extend({

  didInsertElement: function () {
    var _this=this, choices = [];
    $('#place_search').autoComplete({
      minChars: 1,
      delay: 500,
      source: function (term, suggest) {
        _this.get('controller').get('store').find('common/compound',{name: term}).then(compounds => {
          choices = compounds
        });

        var suggestions = [];

        //for (i = 0; i < choices.length; i++) {
        //  if (~choices[i][0].toLowerCase().indexOf(term)) {
        //    suggestions.push(choices[i][0]);
        //  }
        //}
        if(!Ember.isEmpty(choices)){
          choices.forEach(compound => {
            //if (choices[i][0].toLowerCase().indexOf(term)) {
            suggestions.push(compound.get('name'));
            //}
          })
        }

        if(suggestions.length > 0){
          suggest(suggestions);
        }
      },
      onSelect: function (term) {
        //$.each($(choices), function (index, value) {
        //  if (term == choices[index][0]) {
        //    $('#line-2').css('display', 'block');
        //    $('#line-3').css('display', 'block');
        //    $('#area_select').val(value[1]).trigger("change");
        //    $('#area_address').val(value[2]);
        //    $('#subway_select').val(value[3].split(',')).trigger("change");
        //  }
        //});

        choices.forEach(compound => {
          if (compound.get('name') === term) {
            _this.get('controller').get('store').fetchById('common/compound',compound.get('id')).then(selectedCompound => {
              _this.get('controller').send("updateAddress", selectedCompound);
            });
          }
        })
      }
    }),

    this.get('controller').on('openAddressBox', this, this.show_address_box);
  },
  show_address_box: function(){
    $('.address-box').css('display', 'block');
    $('.overlay-full-screen').css('display', 'block');
  }
});
