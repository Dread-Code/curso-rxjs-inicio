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

    setTimeout(() => {
        subs.complete()
        console.log("Complete")
    }, 6000)

    return () => {
        clearInterval(interva)
        console.log("Intervalo destruido")
    }
})

const subscription1 = intervalo$.subscribe(observer)
const subscription2 = intervalo$.subscribe(observer)
const subscription3 = intervalo$.subscribe(observer)
subscription1.add(subscription2)
subscription2.add(subscription3)

setTimeout(() => {
    subscription1.unsubscribe()
    subscription2.unsubscribe()
    // subscription2.unsubscribe()
    // subscription3.unsubscribe()
    console.log("Completado Timeout")
}, 3000);
