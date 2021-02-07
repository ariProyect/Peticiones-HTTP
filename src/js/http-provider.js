const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';


// Cloudinary
const cloudPreset = 'autwc6pa';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/dx0pryfzn/upload';


// Esta funcion regresa una promesa
const obtenerChiste = async() => {

    try {

        const resp = await fetch( jokeUrl );

        // Si no se hizo correctamente la peticion
        if( !resp.ok ) throw 'No se pudo realizar la peticion'; 

        // Extraer el json de la respuesta
        const { icon_url, id, value } = await resp.json();

        return { icon_url, id, value };

    } catch (err ){

        throw err;

    }
    
    
}

/**
 * Obtiene los usuarios
 */
const obtenerUsuarios = async() => {

    // obteniendo los usuarios
    const resp = await fetch( urlUsuarios );
    // de este obj me interesa solo la data y le cambio el nombre a usuarios
    const { data:usuarios } = await resp.json();

    return usuarios; 
}


// ArchivoSubir :: File
/**
 * 
 * @param {*} archivoSubir 
 */
const subirImagen = async( archivoSubir ) => {

    // nos crea el resultado de un formulario html pero esta listo en javascript
    const formData = new FormData();


    formData.append('upload_preset', cloudPreset );
    formData.append('file', archivoSubir );

    try { 
        
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            // Recoger esa respuesta
            const cloudResp = await resp.json();
            return cloudResp.secure_url; 
        } else {
            throw await resp.json();
        }

    } catch( err ) {
        throw err;
    }

}



export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
    
}
