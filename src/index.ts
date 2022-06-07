import { fromEvent } from "rxjs";

const texto = document.createElement("div");

texto.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate, enim id consequat gravida, lacus ex viverra mi, eget pharetra turpis sem non ante. Fusce felis risus, ornare nec auctor sit amet, commodo non massa. In blandit faucibus malesuada. Nulla et eleifend tortor, vitae fringilla risus. Phasellus venenatis nisi felis, sed ultricies leo accumsan ut. Pellentesque auctor aliquam tellus et pharetra. Morbi vel dui quis mi blandit gravida. Nullam mattis lectus sed arcu tristique, ut iaculis nulla lacinia. Suspendisse tempus ornare orci. Donec venenatis erat quis nibh sollicitudin, interdum fermentum nisi volutpat. Cras diam metus, malesuada vel gravida vel, volutpat vitae est. Donec luctus pretium malesuada. Pellentesque quam lorem, commodo a convallis non, viverra nec purus.
    <br/>
    <br/>
    Quisque a efficitur lectus, eu sodales nisl. Suspendisse potenti. Pellentesque porta augue vitae nibh scelerisque, id semper arcu auctor. Sed vestibulum tristique ligula, non tempus risus finibus sed. Suspendisse potenti. Vivamus eleifend a dolor et tristique. Donec finibus ut justo id vehicula. Sed eu ullamcorper massa. Proin in erat sit amet massa malesuada luctus.
    <br/>
    <br/>
    Nullam viverra elit a elit venenatis, at lobortis justo eleifend. Etiam eu odio condimentum, fringilla mi id, pellentesque leo. Nunc nisi ex, mollis non hendrerit in, blandit ac ante. Aliquam imperdiet arcu arcu, vitae tempus felis tincidunt sed. Etiam eget bibendum metus, sed consequat nunc. Curabitur commodo tortor et nibh molestie, et placerat turpis rutrum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi dui urna, molestie eu fermentum convallis, mattis eget est. Cras consequat odio vehicula, accumsan leo vitae, placerat augue. Nunc ornare bibendum ipsum, vel lacinia libero consectetur porttitor. Suspendisse mauris lorem, imperdiet et tincidunt a, cursus sit amet leo. Etiam condimentum ligula in lorem dapibus, nec tristique arcu dictum. Ut eget orci ac est tempor condimentum. In tincidunt odio ac nibh tristique, quis sodales tellus euismod. In vel mi sed libero sollicitudin blandit at sed sapien. Suspendisse feugiat maximus sem, sed rutrum purus efficitur ut.
    <br/>
    <br/>
    Ut quis tincidunt mauris. Phasellus dictum ac orci ac imperdiet. Donec sagittis nisl nisl. Mauris velit purus, vulputate at elit eget, faucibus fermentum dui. Mauris imperdiet urna mauris, nec bibendum est dictum quis. Cras congue quis sapien et facilisis. Aenean volutpat ante nisi, quis luctus eros eleifend ac.
    <br/>
    <br/>
    Integer sed lorem sodales, tincidunt augue sodales, consectetur risus. Quisque vitae facilisis magna. Vivamus rhoncus nisl tellus, vel eleifend nulla aliquet sit amet. In ligula massa, hendrerit ut lobortis eget, condimentum id augue. Sed quis odio eu tortor semper tristique. Donec pulvinar ex id vehicula luctus. Aliquam cursus ex tincidunt dictum blandit. Cras non blandit arcu. Duis et mi id urna iaculis tempus at semper felis. Etiam id ipsum venenatis, euismod metus vitae, ornare nibh.
 `;

const body = document.querySelector('body')
body.append(texto)

const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar')
body.append(progressBar)

// funcion que haga el calculo

// Streams
const scroll$ = fromEvent(document, 'scroll')
// scroll$.subscribe(console.log)

const progress$ = scroll$.pipe(

)

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})

