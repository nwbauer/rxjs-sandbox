var Rx = require('rxjs/Rx');

var subject = new Rx.Subject();

subject
.subscribe({
  next: (v) => { console.log('observerA: ' + v); },
});

subject
.filter((val) => { return val === 1;})
.subscribe({
  next: (v) => { console.log('observerB: ' + v); },
});

subject.filter(() => { return false;}).next(1);
subject.next(2);
