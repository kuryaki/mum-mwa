const { Observable } = require('@reactivex/rxjs');

const p = new Promise((resolve, reject) => {
  setTimeout(() => resolve('exito!'), 2000);
});

Observable.fromPromise(p).subscribe(console.log);

