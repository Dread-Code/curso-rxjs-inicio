import { asyncScheduler } from 'rxjs'

/**
 * * Basicamente tenemos algo muy similar a estas dos funciones
 * * con astyncScheduler
 */
// setTimeout(() => {}, 3000)
// setInterval(() => {}, 3000)

const saludar = () => console.log("Hola Mundo")
const saludar2 = ({nombre}) => console.log(`Hola ${nombre}`)
/**
 * Ejecutara la funcion a los 2 segundos
 */
// asyncScheduler.schedule(saludar, 2000);
/**
 * pero como tercer parametro podriamos pasarle un estado,
 * el cual seria el paramtero que se la pasaria a la funcion
 * ejecutada metiante asyncScheduler
 */
// asyncScheduler.schedule(saludar2, 2000, {nombre: 'lucas'});

const subscription = asyncScheduler.schedule(function(state){
    console.log('state', state)
    this.schedule(state + 1, 1000)
}, 3000, 0)

// setTimeout(() => {
//     subscription.unsubscribe()
// }, 6000)

asyncScheduler.schedule(() => subscription.unsubscribe(), 6000)