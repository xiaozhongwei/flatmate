import Ember from 'ember';

export function unknownGenerator(params/*, hash*/) {
  if(params[0] === undefined || params === ''){
    return "Unknown";
  }

  if(params[0] instanceof Date){
    return  moment(params[0]).format('YYYY-MM-DD');
  }

  return params[0];
}

export default Ember.HTMLBars.makeBoundHelper(unknownGenerator);
