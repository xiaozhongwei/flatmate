import Ember from 'ember';

export function gender(params/*, hash*/) {
  if(params == "1"){
    return "Guy";
  }
  else if(params == "2"){
    return "Girl";
  }
  return params;
}

export default Ember.HTMLBars.makeBoundHelper(gender);
