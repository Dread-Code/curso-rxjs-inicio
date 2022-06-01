import { scheduled, of, range, asyncScheduler } from 'rxjs'

// const src$ = of(1,2,3,4,5,6,7,8,9,10,11)
// const src$ = of(1,2,3,4,5)
const src$ =scheduled(range(1,5), asyncScheduler)

console.log("Inicio")
src$.subscribe(console.log)
console.log("Fin")