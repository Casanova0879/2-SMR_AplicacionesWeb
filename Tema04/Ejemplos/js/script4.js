function Oscuro (){
    document.body.style.backgroundColor = "#060303";
    document.body.style.color ="white";

}

function Claro (){
    document.body.style.backgroundColor = "#ffff";
    document.body.style.color ="#000000";

}

function agregar (){
    var entrada = document.getElementById("cajaTexto").value;
    var lista = document.getElementById("lista");
    var nuevoli = document.createElement("li");
    var texto = document.createTextNode(entrada);
    nuevoli.appendChild(texto);
    lista.appendChild(nuevoli);

}

