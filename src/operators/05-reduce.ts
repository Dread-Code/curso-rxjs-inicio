
import { interval } from "rxjs";
import { take, reduce } from "rxjs/operators";

const numbers = [1,2,3,4,5]

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0)

console.log('total arr', total)

interval(1000)
.pipe(
    take(6),
    reduce(totalReducer)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Complete')
})