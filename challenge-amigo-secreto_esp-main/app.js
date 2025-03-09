let listaAmigo = []; // array para contener los nombres de amigo secreto 
let listaAmigoSecreto = {}; // array para almacenar los nombres que ya fueron asignados 
let amigolista = document.getElementById ('listaAmigo');
let numeroMaximo = 5; // número maximo de amigos secretos

//Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    
// verifica si el nombre ya esta en la lista 
    if (listaAmigo.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
}
// se verifica si se alcanzo el maximo de amigos asignados 
    if (listaAmigo.length >= numeroMaximo) {
        alert(`Ya has alcanzado el número máximo de amigos (${numeroMaximo}).`);
    }

    listaAmigo.push (nombreAmigo); // agrega el nombre a la lista 
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML += `<li>${nombreAmigo}</li>`; // muestra los nombres en la lista de html

    // Limpia el input
    inputAmigo.value = "";
}


//función del  boton sortear lista de amigos 
 function sortearAmigo(){
    let random = Math.floor(Math.random() * listaAmigo.length);
    let amigoSecreto = listaAmigo [random];

    // Muestra el resultado en la página
    mostrarResultado(amigoSecreto);

   // Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSecreto) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>¡Tu amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;
 }
 
}

// Función para reiniciar el juego
function reiniciarJuego() {
    listaAmigo = []; // Reinicia la lista de nombres asignados
    document.getElementById("resultado").innerHTML = ""; // Limpia el resultado


}
// Inicializar el juego
reiniciarJuego();