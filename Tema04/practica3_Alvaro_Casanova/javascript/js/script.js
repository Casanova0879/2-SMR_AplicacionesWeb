// =========================================================
//  Práctica 3 — JavaScript
//  Nombre y apellidos: Álvaro Casanova
//  Recuerda: cada bloque con un comentario escrito por ti
// =========================================================


// ===== A1. Mi tarjeta (se ejecuta al cargar la página, sin función) =====

// Busco el párrafo del saludo por su id y le cambio el texto con innerHTML
    document.getElementById("saludo").innerHTML = "Hola, me llamo TU NOMBRE y estudio 2º SMR";

// Guardo la tarjeta en una variable y le cambio el color del texto y del fondo con style
    var tarjeta = document.getElementById("tarjeta");
    tarjeta.style.color = "white";
    tarjeta.style.backgroundColor = "teal";


// ===== A2. Lista de la compra: function anadir() =====
// Función que se ejecuta al pulsar Añadir
function anadir() {
    // Leo con .value lo que el usuario ha escrito en la caja
    var producto = document.getElementById("producto").value;
    // Creo un <li> nuevo, que todavía no se ve
    var li = document.createElement("li");
    // Creo el texto con el producto escrito
    var texto = document.createTextNode(producto);
    // Meto el texto dentro del <li>
    li.appendChild(texto);
    // Meto el <li> en la lista para que aparezca en la página
    document.getElementById("lista").appendChild(li);
}



// ===== A3. Modo noche y modo día: function modoNoche() y function modoDia() =====
// Pone la página entera en negro con letra blanca y avisa en el párrafo
function Noche() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("modo").innerHTML = "Modo noche activado";
}
// Pone la página en blanco con letra negra y avisa en el párrafo
function Dia() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.getElementById("modo").innerHTML = "Modo día activado";
}


// ===== A4. Colores de la tarjeta: function colorTarjeta(color) =====
// Recibe un color desde el botón y se lo pone de fondo a la tarjeta
function colorTarjeta(color) {
    document.getElementById("tarjeta").style.backgroundColor = color;
}


// ===== A5. Botón que saluda: function saludar() =====
// Muestra un mensaje emergente y cambia el color de fondo del propio botón
function saludar() {
    alert("Hola, soy Álvaro Casanova");
    document.getElementById("botonSaludo").style.backgroundColor = "red";
}
