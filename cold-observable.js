var Rx = require('rxjs/Rx');

var source$ = new Rx.Observable((observer) => {

  setTimeout(() => {
    const value = 1
    console.log('...sending', value);
    observer.next(value);
  }, 1000);

  setTimeout(() => {
    const value = 2
    console.log('...sending', value);
    observer.next(value);
  }, 2000);

  setTimeout(() => {
    const value = 3
    console.log('...sending', value);
    observer.next(value);
  }, 3000);

  setTimeout(() => {
    const value = 4
    console.log('...sending', value);
    observer.next(value);
  }, 4000);

});


var map$ = source$.map((item) => {
  console.log('map');
  return item;
});


// Subscription 1
setTimeout(() => {
  console.log('subscribing1')
  map$.subscribe((value) => console.log('sub1 got', value));
}, 0);

// Subscription 2, late observer, still gets all events
setTimeout(() => {
  console.log('subscribing2')
  map$.subscribe((value) => console.log('sub2 got' + value));
}, 2500);
