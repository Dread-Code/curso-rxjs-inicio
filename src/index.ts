import { fromEvent, range } from 'rxjs'
import { map, pluck } from 'rxjs/operators'

// const range$ = range(1,5);

// range$
// .pipe(
//     map<number, string>( val => (val * 10).toString())
// )
// .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupCode$ = keyup$.pipe(
    map(({code}) => code)
)

/**
 * keybooardEvent: {
    * ... ,
    * target: {
    * ... ,
    * baseURI: http://localhost:8081/
    * }
 * }
 * retorn la propiedad dentro del objeto indicado
 */
const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI')
)

keyup$.subscribe(console.log)
keyupCode$.subscribe( code => console.log('map ', code))
keyupPluck$.subscribe( code => console.log('pluck', code))