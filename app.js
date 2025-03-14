// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el input donde se escribe el nombre
    const inputAmigo = document.getElementById('amigo');
    // Obtener el valor del input y eliminar espacios en blanco al inicio y final
    const nombreAmigo = inputAmigo.value.trim();

    // Validar que el nombre no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return; // Salir de la función si el nombre está vacío
    }

    // Validar que el nombre no esté repetido
    if (amigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
        return; // Salir de la función si el nombre ya existe
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el input después de agregar el nombre
    inputAmigo.value = "";

    // Actualizar la lista de amigos en el DOM
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    // Obtener el elemento <ul> donde se mostrarán los nombres
    const listaAmigos = document.getElementById('listaAmigos');
    // Limpiar la lista antes de actualizarla
    listaAmigos.innerHTML = "";

    // Recorrer el array de amigos y crear un <li> para cada uno
    amigos.forEach((amigo) => {
        const li = document.createElement('li'); // Crear un elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo al <li>
        li.setAttribute('role', 'listitem'); // Agregar atributo ARIA para accesibilidad
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    });
}

// Función para sortear un solo nombre de la lista
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("Debes agregar al menos un amigo para realizar el sorteo.");
        return; // Salir de la función si no hay amigos en la lista
    }

    // Seleccionar un nombre aleatorio de la lista
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en el DOM
    mostrarResultado(amigoSecreto);
}

// Función para mostrar el resultado del sorteo en el DOM
function mostrarResultado(amigoSecreto) {
    // Obtener el elemento <ul> donde se mostrará el resultado
    const resultadoElement = document.getElementById('resultado');
    // Limpiar el resultado anterior
    resultadoElement.innerHTML = "";

    // Crear un elemento <li> para mostrar el amigo sorteado
    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto es: ${amigoSecreto}!`;
    li.setAttribute('role', 'listitem'); // Agregar atributo ARIA para accesibilidad
    resultadoElement.appendChild(li); // Agregar el <li> a la lista
}