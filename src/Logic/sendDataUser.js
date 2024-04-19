const API_CAT_IMAGES_URL = 'https://cataas.com/cat/says';

export const setUserData = async (formulario) => {
    try {
        const res = await fetch(API_CAT_IMAGES_URL, {
            method: 'POST',
            body: JSON.stringify(formulario),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!res.ok) {
            throw new Error(`Error en la solicitud: ${res.status}`);
        }

        const data = await res.json();
        return true; // La solicitud se realizó con éxito, devolvemos true
    } catch (error) {
        console.error('Error:', error);
        return false; // Ocurrió un error, devolvemos false
    }
};


    


// function enviarFormulario() {

//     const formData = new FormData(formulario);
//     const url = 'https://ejemplo.com/api/endpoint';

