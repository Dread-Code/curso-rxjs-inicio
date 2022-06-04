import { from, range } from 'rxjs';
import { filter } from 'rxjs/operators';

// range(1,10).pipe(
//     filter(val => val % 2 ===1)
// ).subscribe(console.log)

range(20,30).pipe(
    filter((val, i) => {
        console.log('index', i)
        return val % 2 === 1
    })
)//.subscribe(console.log)

interface IPersonaje {
    tipo: string;
    nombre: string;
}

const personajes: IPersonaje[] = [
    {
        tipo: "heroe",
        nombre: "batman"
    }, {
        tipo: "heroe",
        nombre: "robin"
    },
    {
        tipo: "villano",
        nombre: "joker"
    }
]

const caracters$ = from(personajes).pipe(
    filter(({ tipo }) => tipo === "heroe")
)

caracters$.subscribe(console.log)