import { from, interval } from "rxjs";
import { take, scan, map } from "rxjs/operators";

const totalScaned = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}
/**
 * Basicamente es lo mismo que el reducer 
 * con la excepcion que emite los valores
 */
interval(1000)
.pipe(
    take(6),
    scan(totalScaned)
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('Complete')
})

//Redux Pattern

interface Usuario {
    id?: string;
    auntenticado?: boolean;
    token?: string;
    edad?: number 
}

const user: Usuario[] = [
    { id: 'Lucas', auntenticado: false, token: null},
    { id: 'Lucas', auntenticado: true, token: 'abc'},
    { id: 'Lucas', auntenticado: true, token: 'abc124'},
]

const state$ = from(user).pipe(
    scan<Usuario, Usuario>((acc, cur) => {
        return { ...acc, ...cur }
    }, { edad: 25 })
)

const id$ = state$.pipe(
    map(state => state)
)

id$.subscribe(console.log)