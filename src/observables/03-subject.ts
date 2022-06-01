
import { Observable, Observer, Subject } from 'rxjs'
import { CleanPlugin } from 'webpack'

const observer: Observer<number>  = {
    next: value => console.log("Next: ", value * 2),
    error: error => console.warn("Error: ", error),
    complete: () => console.info("completado") 
}

const intervalo$ = new Observable<number>( subs => {
    const intervalId = setInterval(() => subs.next(Math.random()), 1000)

    return () => {
        clearInterval(intervalId)
        console.log("intervalo destruido")
    }
})

/**
 * 1 - Casteo multiple ---> significa que  muchas subscripciones 
 * van a estar sujetas a ese mismo observable y van a servir
 * para disribuir la misma info a otods los lugares deonde este suscrito
 * 2 - Tambien es un observer
 * 3 - Next, error y complete
 */
const subject$ = new Subject<number>();

const intervalSubject = intervalo$.subscribe(subject$)

// const subs1 = intervalo$.subscribe(rnd => console.log('subs1', rnd))
// const subs2 = intervalo$.subscribe(rnd => console.log('subs2', rnd))

/**
 * si ejectuas estas subscripciones para que el observable empiece 
 * a emitir info vas a ver como emite los mismos numeros cosa que no 
 * pasa con las otras subs ⬆
 */

const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)


setTimeout(() => {
    /**
     * Como el subject tambien es un observable nnos permite utilizar
     * metodos next, error and complete.
     * 
     * Esto nos ayuda a por ejemplo insertar datos dentro del flujo
     * de datos que el observable esta emitiendo.
     * 
     * ! cuando la data es producida por el observable en si mismo, es 
     * ! llamado cold observable. Pero cuando la data es producida Fuera
     * ! del observable es llamado "HOT OBSERVABLE".
     * 
     * * En pocas palabras un subject nos permite convertir un cold
     * * observable en un hot observable 
     */
    subject$.next(10)
    subject$.complete()

    /**
     * Destrumos el subject 
     */
    intervalSubject.unsubscribe()

}, 3500)