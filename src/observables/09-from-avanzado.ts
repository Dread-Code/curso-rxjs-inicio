import { of, from } from 'rxjs'

/**
 * of -> toma argumnetos y genera una secuencia
 * from -> array, promise, iterable, observble
 */

const observer = {
    next: val => console.log('next: ', val),
    complete: () => console.log('complete'),
}

const miGenerador = function*(){
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

const miIterable = miGenerador()

// for(let id of miIterable){
//     console.log(id)
// }

from(miIterable).subscribe(observer)

// const source$ = from([1,2,3,4,5,6])
/**
 * Hace lo mismo que el from
 */
// const source$ = of(...[1,2,3,4,5,6])
/**
 * Cada letra aparecera en consola
 */
// const source$ = from('Fernando')

// const source$ = from(fetch('https://api.github.com/users/Dread-Code'))

// source$.subscribe( async (resp) => {
//     console.log(resp)
//     const data = await resp.json()
//     console.log(data)
// })

// source$.subscribe(observer)