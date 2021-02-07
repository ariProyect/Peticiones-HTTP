import { subirImagen } from './http-provider';

const body = document.body;
let inputFile, imgFoto;

/**
 * Crear todo el html
 */
const crearInputFileHtml = () => {

    const html = `

        <h1 class="mt-5">Subir archivos</h1>
        <hr>

        <label>Selecciona una fotografía: </label>
        <input type="file" accept="image/png, image/jpeg"/>

        <br>
        <img id="foto" class="img-thumbnail" src="">
    
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append( div );

    // Referencia  a ambos
    inputFile = document.querySelector('input');
    imgFoto   = document.querySelector('#foto');

}

// listerner que cuando cambie el input file inmediatamente haga la carga de la imagen
const eventos = () => {

    inputFile.addEventListener('change', (event) => {

        const file = event.target.files[0]; // Un listado de los elementos seleccionados y me interesa solo el primero
        //porque estoy subiendo solo uno
        
        // console.log(file);
        subirImagen( file ).then( url => imgFoto.src = url );

    });

}



export const init = () => {
    crearInputFileHtml();
    eventos();
}
