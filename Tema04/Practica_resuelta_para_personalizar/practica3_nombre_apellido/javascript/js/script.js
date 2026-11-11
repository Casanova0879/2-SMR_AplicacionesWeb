// Práctica 4 — JavaScript
// Nombre y apellidos: NOMBRE APELLIDOS

// ===== A1 =====
// Busco el saludo y escribo mi presentación al cargar la página.
document.getElementById("saludo").innerHTML = "Hola, me llamo NOMBRE APELLIDOS y estudio 2º SMR";
// Cambio el texto y el fondo de la tarjeta.
document.getElementById("tarjeta").style.color = "white";
document.getElementById("tarjeta").style.backgroundColor = "teal";

// ===== A2 =====
// Al pulsar Añadir, leo el producto y lo añado a la lista.
function anadir() {
    // Leo lo que hay escrito en la caja de texto.
    var producto = document.getElementById("producto").value;
    // Creo un elemento de lista y un nodo con el texto del producto.
    var nuevo = document.createElement("li");
    var texto = document.createTextNode(producto);
    // Primero meto el texto en el elemento y después el elemento en la lista.
    nuevo.appendChild(texto);
    document.getElementById("lista").appendChild(nuevo);
}

// ===== A3 =====
// Pongo el fondo de la página negro, la letra blanca y actualizo el aviso.
function modoNoche() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("modo").innerHTML = "Modo noche activado";
}
// Recupero el fondo blanco, la letra negra y el aviso del modo día.
function modoDia() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("modo").innerHTML = "Modo día activado";
}

// ===== A4 =====
// Recibo el color elegido en el botón y cambio el fondo de la tarjeta.
function colorTarjeta(color) {
    document.getElementById("tarjeta").style.backgroundColor = color;
}

// ===== A5 =====
// Muestro mi saludo y después cambio el fondo del botón que he pulsado.
function saludar() {
    alert("Hola, soy NOMBRE APELLIDOS");
    document.getElementById("botonSaludo").style.backgroundColor = "orange";
}
