document.addEventListener("DOMContentLoaded", function () {
    // Asociar la función crearUsuario al evento click del botón
    document.getElementById("btnCrearUsuario").addEventListener("click", crearUsuario);

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
    fetch('https://localhost:7246/api/Usuario', {
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
});

document.addEventListener("DOMContentLoaded", function () {
    // Manejar el evento click del botón "Cambiar Contraseña"
    document.getElementById("btnCambiarContrasena").addEventListener("click", function () {
        // Obtener los valores de los campos de contraseña
        var contrasenaActual = document.getElementById("InputPassAct").value;
        var nuevaContrasena = document.getElementById("InputPasswNew").value;
        var confirmarContrasena = document.getElementById("InputPasswNewConf").value;

        // Construir el objeto de datos
        var data = {
            contrasenaActual: contrasenaActual,
            nuevaContrasena: nuevaContrasena,
            confirmarContrasena: confirmarContrasena
        };

        // Hacer la solicitud Fetch
        fetch("https://localhost:7246/api/Usuario", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            // Manejar la respuesta exitosa del servidor
            console.log(data);
        })
        .catch(error => {
            // Manejar errores
            console.error("Error:", error);
        });
    });
});
