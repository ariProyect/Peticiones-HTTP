import { obtenerUsuarios } from './http-provider';

const body  = document.body;
let tbody;
let correlativo = 0;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5 text-center fst-italic"> Usuarios</h1>
    <hr>

    <table class="table">
        <thead>
            <tr>
                <th scope="col" class="p-3 mb-2 bg-secondary text-white">#</th>
                <th scope="col" class="p-3 mb-2 bg-secondary text-white">email</th>
                <th scope="col" class="p-3 mb-2 bg-secondary text-white">Nombre</th>
                <th scope="col" class="p-3 mb-2 bg-secondary text-white">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    // Crear una referencia al TBODY
    // ya que los TRs van dentro del tbody
            // querySelector('tbody');
            // Crear una variable para mantener la referencia?
    tbody = document.querySelector('tbody');
}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "first_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = ( usuario ) => {

    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar
    correlativo++;

    const html = `
        <td scope="col" class="p-3 mb-2 bg-info text-dark"> ${ correlativo }. </td>
        <td scope="col" class="p-3 mb-2 bg-info text-dark"> ${ usuario.email } </td>
        <td scope="col" class="p-3 mb-2 bg-info text-dark"> ${ usuario.first_name } ${ usuario.first_name } </td>
        <td scope="col" class="p-3 mb-2 bg-info text-dark">
            <img class="img-thumbnail" src="${ usuario.avatar }">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    // Añadir el table row (tr) dentro del TBody creado anteriormente
    tbody.appendChild( tr );
}


export const init = async() => {

    crearHtml();

    correlativo = 0;

    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFilaUsuario (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación
    (await obtenerUsuarios()).forEach( crearFilaUsuario );

}

