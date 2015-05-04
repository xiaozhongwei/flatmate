import Ember from 'ember';

export function gender(params/*, hash*/) {
  if(params > 1){
    return params + " steps";
  }
  else{
    return params + " step";
  }
}

export default Ember.HTMLBars.makeBoundHelper(gender);
