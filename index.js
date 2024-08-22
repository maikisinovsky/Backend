let listaJugadores = [];
let cantidadJugadores = 0;
let botonSubmit = document.getElementById('submit');
let botonBorrar = document.getElementById('borrar');
let botonMostrar = document.getElementById('mostrar');

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    cantidadJugadores += 1;
    const nombre = document.getElementById('nombre').value;
    const numero = document.getElementById('numero').value;
    const posicion = document.getElementById('posicion').value;

    listaJugadores.push({ nombre, numero, posicion });

    document.getElementById('formulario').reset();

    const ul = document.getElementById('listaJugadores');
    ul.innerHTML = '';

    listaJugadores.forEach(jugador => {
        let li = document.createElement('li');
        li.textContent = `${jugador.nombre} (#${jugador.numero}) - ${jugador.posicion}`;
        ul.appendChild(li);
    });

    if (cantidadJugadores >= 2) {
        const mensaje = document.getElementById("mensaje");
        botonSubmit.disabled = true;
        mensaje.innerHTML ="El máximo de jugadores ha sido alcanzado"
    }
});

botonBorrar.addEventListener('click', function() {
    listaJugadores = [];
    cantidadJugadores = 0;
    const ul = document.getElementById('listaJugadores');
    ul.innerHTML = "";
    mensaje.innerHTML ="";

    botonSubmit.disabled = false;
});