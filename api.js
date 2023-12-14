function crearUsuario() {
    // Obtener los valores del formulario
    const usuario = document.getElementById('InputUser').value;
    const password = document.getElementById('InputPassw').value;
    const confirmarPassword = document.getElementById('InputPasswConf').value;
    const correo = document.getElementById('InputEmail').value;
    const preguntaSeguridad = document.getElementById('InputSQ').value;
    const respuestaSeguridad = document.getElementById('InputSQA').value;

    // Construir el objeto de datos
    const data = {
        usuario,
        password,
        confirmarPassword,
        correo,
        preguntaSeguridad,
        respuestaSeguridad
    };

    // Realizar la solicitud POST
    fetch('URL_DE_TU_API', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta:', data);
        
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}