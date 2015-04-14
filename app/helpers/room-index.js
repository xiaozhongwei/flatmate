import Ember from 'ember';

export function gender(params/*, hash*/) {
  if(params == 0){
    return "A";
  }
  else if(params == 1){
    return "B";
  }
  else if(params == 2){
    return "C";
  }
  else if(params == 3){
    return "D";
  }
  else if(params == 4){
    return "E";
  }
  else if(params == 5){
    return "F";
  }
  else if(params == 6){
    return "G";
  }
  return params;
}

export default Ember.HTMLBars.makeBoundHelper(gender);
