var Rx = require('rxjs/Rx');

var subject = new Rx.Subject();

subject.next(1);
subject.next(2);
subject.complete();

subject.toPromise().then((val) => {
  console.log('resolved:', val);
})
.catch((err)=> {
  console.log('err:', err);
});
