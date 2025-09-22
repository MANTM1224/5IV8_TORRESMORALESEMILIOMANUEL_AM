
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];


function mostrarMensaje(texto, tipo) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = texto;
    mensajeDiv.className = `mensaje ${tipo}`;
    
    
    mensajeDiv.offsetHeight;
    mensajeDiv.classList.add('show');
}


function validarDNI() {
   
    const numeroDni = parseInt(document.getElementById('numeroDni').value);
    const letraUsuario = document.getElementById('letraDni').value.toUpperCase();

    
    document.getElementById('mensaje').classList.remove('show');


    if (isNaN(numeroDni) || letraUsuario === '') {
        mostrarMensaje('Por favor, introduce tanto el número como la letra del DNI.', 'error');
        return;
    }


    if (numeroDni < 0 || numeroDni > 99999999) {
        mostrarMensaje('El número proporcionado no es válido. Debe estar entre 0 y 99999999.', 'error');
        return;
    }

    
    const resto = numeroDni % 23;
    const letraCalculada = letras[resto];

    
    if (letraUsuario !== letraCalculada) {
        mostrarMensaje(`La letra que has indicado no es correcta. La letra correcta para el DNI ${numeroDni} es: ${letraCalculada}`, 'error');
    } else {
        mostrarMensaje(`✅ ¡Correcto! El DNI ${numeroDni}${letraUsuario} es válido.`, 'success');
    }
}

document.getElementById('dniForm').addEventListener('submit', function(e) {
    e.preventDefault();
    validarDNI();
});

document.getElementById('letraDni').addEventListener('input', function(e) {
    e.target.value = e.target.value.toUpperCase();
});


document.getElementById('letraDni').addEventListener('keypress', function(e) {
    const char = String.fromCharCode(e.which);
    if (!/[a-zA-Z]/.test(char)) {
        e.preventDefault();
    }
});
