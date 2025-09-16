// lista de colores
const colores = ['#f0f0f0', '#E5E4E2', '#BDB76B', '#ADD8E6', '#F08080'];
let colorIndex = 0; // Índice para los colores

// Seleccionamos los elementos del DOM que vamos a manipular
const colorButton = document.getElementById('color-button');
const body = document.body;

// Escuchamos el evento click en el botón de cambio de color
colorButton.addEventListener('click', () => {
    // Cambiamos el color de fondo del body
    colorIndex = (colorIndex + 1) % colores.length; // Ciclo para no salirse del array
    body.style.backgroundColor = colores[colorIndex];
});



// dofinicion de los datos del equipo
const integrantes = [
    {
        nombre: 'Ayala Nieto Carlos Daniel',
        foto: 'fotoCarlos.jpg', // mi foto
        descripcion: 'alumno de septimo semestre, NC:22030119.'
    },
    {
        nombre: 'Gaspar Lara Reinaldo Emmanuel',
        foto: 'fotoGaspar.jpg', // la foto del gaspar
        descripcion: 'igual de septimo semestre, NC: 22030351 .'
    }
];

let integranteIndex = 0; // Índice para alternar entre los integrantes

// Seleccionamos los elementos de la sección de integrantes
const nextIntegranteButton = document.getElementById('next-integrante-button');
const fotoElement = document.getElementById('integrante-foto');
const nombreElement = document.getElementById('integrante-nombre');
const descripcionElement = document.getElementById('integrante-descripcion');

// Función para actualizar la información en la página
function actualizarIntegrate() {
    const integranteActual = integrantes[integranteIndex];
    fotoElement.src = integranteActual.foto;
    nombreElement.textContent = integranteActual.nombre;
    descripcionElement.textContent = integranteActual.descripcion;
}

// Escuchamos el evento click en el botón de siguiente integrante
nextIntegranteButton.addEventListener('click', () => {
    integranteIndex = (integranteIndex + 1) % integrantes.length; // Alternamos entre 0 y 1 (porque somos dos nadamas jaja)
    actualizarIntegrate(); // Llamamos a la función para mostrar los nuevos datos
});

// Llamamos a la función al cargar la página para mostrar el primer integrante

actualizarIntegrate();
