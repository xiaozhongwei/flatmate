import Ember from 'ember';

export function unknownGenerator(params/*, hash*/) {
  if(params[0] === undefined || params === ''){
    return "Unknown";
  }

  return params[0];
}

export default Ember.HTMLBars.makeBoundHelper(unknownGenerator);
