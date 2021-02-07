
const urlCRUD = 'https://reqres.in/api/users';  // hay que adicionarle el / y el numero del usuario


/**
 * 
 * @param { del usuario} id 
 */
const getUsuario = async( id ) => {

    // construyendo el string /idusuario de la url
    const resp = await fetch(`${ urlCRUD }/${ id }`);
    const { data } = await resp.json();
    return data;
}

/**
 * 
 * @param {*} usuario 
 */
const crearUsuario = async( usuario ) => {

    const resp = await fetch( urlCRUD, { // segundo argumento
        method: 'POST',
        body: JSON.stringify( usuario ),  
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

/**
 * Petición     PUT
 * @param {*} id 
 * @param {*} usuario 
 */
const actualizarUsuario = async( id, usuario ) => {

    const resp = await fetch( `${ urlCRUD }/${ id }`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await resp.json();
}

/**
 * 
 * @param {*} id 
 */
const borrarUsuario = async( id ) => {

    const resp = await fetch(  `${ urlCRUD }/${ id }`, {
        method: 'DELETE'
    });

    return ( resp.ok ) ? 'Borrado' : 'No se pudo eliminar';

}



export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario
}