import { Observable, Observer } from 'rxjs'

// const obs$ = Observable.create()

const observer: Observer<string>  = {
    next: value => console.log("Next: ", value),
    error: error => console.warn("Error: ", error),
    complete: () => console.info("completado") 
}

const obs$ = new Observable<string>( subs => {
    subs.next('Hola')
    subs.next('Mundo')

    subs.next('Hola')
    subs.next('Mundo')

    // Forzar error
    // const a = undefined
    // a.nombre = "lucas"

    subs.complete()

});

obs$.subscribe(observer)

/**
 * Hay una tercera forma de hacer esto mismo y esa funcionalidad
 * llamamos observer --> linea 5
 */
// obs$.subscribe(
//     valor => console.log('next', valor),
//     error => console.warn('error', error),
//     () => console.info('complete')
// )

