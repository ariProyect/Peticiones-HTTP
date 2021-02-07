import { obtenerChiste } from './http-provider';

// referencia al body
const body = document.body;
let btnOtro, olList;
let correlativo = 0;



/***    
 * Crea el html de manera dinamica
 */
const crearChistesHtml = () => {

    const html = `
        <h1 class="mt-5 text-center">Chistes</h1>
        <hr>

        <button class="badge rounded-pill bg-success ms-2"> Otro chiste </button>

        <ol class="mt-2 list-group"> </ol>
    `;

    // Creo el div y le agrego el html
    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;

    body.append(divChistes);

}

/**
 * Los eventos que tendra la pagina de chistes
 * 
 */
const eventos = () => {

    olList  = document.querySelector('ol'); // PORQUE SOLO TENGO UN ORDERLIST EN LA PAGINA
    btnOtro = document.querySelector('button');

    /**
     * click en el boton hace peticion http, traer ese chiste 
     * y se dibuja llamando al metodo dibujarChiste
     * obtenerChiste funcion que se encuentra en nuestro http-provider.js
     * 
     * */ 
    btnOtro.addEventListener('click', async() => {
        
        btnOtro.disabled = true;
        dibujarChiste( await obtenerChiste() );
         // bloqueando el boton hasta que se obtenga la información
         // asi evito que hacer el doble click te saque dos al instante
        btnOtro.disabled = false;
    });

}



/**
 * Crea el html para agregar el chiste
 * @param { se recibe un } chiste Chiste { id, value }
 */
const dibujarChiste = ( chiste ) => {

    const olItem = document.createElement('li');
    correlativo++;
    
    olItem.innerHTML = `${ correlativo }.<b> ${ chiste.id }</b>: ${ chiste.value }`;
    olItem.classList.add('list-group-item');
    olItem.classList.add('list-group-item-primary');

    olList.append(olItem);

}



// funcion init lo que hace es llamar a nuestras funciones
export const init = () => {
    crearChistesHtml();
    eventos();
    
   
}