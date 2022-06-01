import { of } from 'rxjs'

const obs$ = of(1,2,3,4,5);
// const obs$ = of(...[1,2,3,4,5]);
// const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log("Inicio del obs$")

obs$.subscribe({
    next: next => console.log("Next: ", next),
    error: null,
    complete: () => console.info('complete') 
})
console.log("Fin del obs$")