import { Observable, Observer } from 'rxjs'

const observer: Observer<number>  = {
    next: value => console.log("Next: ", value * 2),
    error: error => console.warn("Error: ", error),
    complete: () => console.info("completado") 
}

const intervalo$ = new Observable<number>(subs => {
    let count = 0
    const interva = setInterval(() => {
        count++
        subs.next(count)
    }, 1000)

    return () => {
        clearInterval(interva)
        console.log("Intervalo destruido")
    }
})

const subscription1 = intervalo$.subscribe(observer)
const subscription2 = intervalo$.subscribe(observer)
const subscription3 = intervalo$.subscribe(observer)

setTimeout(() => {
    subscription1.unsubscribe()
    subscription2.unsubscribe()
    subscription3.unsubscribe()
}, 3000);
