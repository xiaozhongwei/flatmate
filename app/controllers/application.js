import Ember from 'ember';

export default Ember.Controller.extend(Ember.Evented,{
  actions: {
    closeModalBox: function(){
      this.trigger('closeModalBox');
    }
  }
});
