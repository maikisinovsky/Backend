let listaJugadores = [];
let cantidadJugadores = 0;
let botonSubmit = document.getElementById('submit');
let botonBorrar = document.getElementById('borrar');
let botonMostrar = document.getElementById('mostrar');

botonSubmit.addEventListener('click', function() {
    cantidadJugadores = cantidadJugadores + 1; 
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

    
    if (cantidadJugadores > 26) {
        botonSubmit.disabled = true;
    }
});

botonBorrar.addEventListener('click', function() {
    listaJugadores = [];
    cantidadJugadores = 0; 
    const ul = document.getElementById('listaJugadores');
    ul.innerHTML = "";
    
    botonBorrar.botonSubmit = false;
});