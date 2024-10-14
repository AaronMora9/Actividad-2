
const titulo = document.getElementById("titulo");
const botonColor = document.getElementById("botonColor");


const colores = ["red", "blue", "green", "purple", "orange"];

botonColor.addEventListener("click", function() {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    titulo.style.color = colorAleatorio;
});