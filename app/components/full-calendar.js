import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['full-calendar'],

  // Event Data
  events: [
    {
      start: '2015-02-24',
      end: '2015-07-02',
      overlap: false,
      rendering: 'background',
      color: '#D5DADA'
    },
    {
      start: '2015-07-10',
      end: '2015-07-20',
      overlap: false,
      rendering: 'background',
      color: '#317482'
    }
  ],

  didInsertElement() {
    Ember.run.scheduleOnce('afterRender', this, this.initCalendar);
  },

  initCalendar: function() {
    let properties = {
      //dayClick: function(date, jsEvent, view) {
      //  alert(date);
      //  if($(this).hasClass('select-day')) {
      //    $(this).removeClass('select-day');
      //  }else{
      //    $('.fc-day').removeClass('select-day');
      //    $(this).addClass('select-day');
      //  }
      //},
      events: this.events
    };

    let calendar = $(".full-calendar").fullCalendar( properties );
    return calendar;

  }
});
