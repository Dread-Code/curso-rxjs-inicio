import { interval, timer } from "rxjs";

/**
 * * inicia una secuencia periodica y nunca endra fin
 */
// const interval$ = interval(1000)

/**
 * * Empieza emitir despues de los dos segundos y finaliza
 */
// const timer$ = timer(2000)
/**
 * * Empieza emitir a los dos segundos pero en vez de finalizar
 * * se vuelve periodico y emite cada segundo
 */
// const timer$ = timer(2000, 1000)
/**
 * * Podemos realizar una notificacion cuando necesitemos bastante
 * * simple
 */
 const hoyEn5 = new Date() //ahora
 hoyEn5.setSeconds(hoyEn5.getSeconds() + 5)
const timer$ = timer(hoyEn5)

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
}

console.log("Inicio")
timer$.subscribe(observer)
console.log("Fin")

