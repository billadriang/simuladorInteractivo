
// PLANTILLA DE VALORES DE REFERENCIA 
class ValorReferencia {
    constructor(name, valorInferior, valorSuperior, bajo, normal, alto) {
        this.name = name;
        this.valorInferior = valorInferior;
        this.valorSuperior = valorSuperior;
        this.bajo = bajo;
        this.normal = normal;
        this.alto = alto;
    }
}
// let VALOR A AGREGAR = new ValorReferencia(RANGO INFERIOR, RANGO SUPERIOR, MENSAJE VALOR BAJO, MENSAJE VALOR NORMAL, MENSAJE VALOR ALTO
let glicemia = new ValorReferencia(
    "GLICEMIA O GLUCEMIA",
    80,
    110,
    "Estas en hipoglicemia, el Valor de Referencia de la glicemia va de  80 a 110 mg/dL",
    "Estas dentro de los valores de Referencia para Glucosa en Sangre, los cuales son de 80 a 110mg/dL",
    "Estas en Hiperglicemia, tus valores estan por encima de los de referencia para glucosa en sangre, los cuales son de 80 a 110mg/dL"
);

let colesterol = new ValorReferencia(
    "COLESTEROL TOTAL",
    125,
    200,
    "Estas en hipocolesterolemia, el Valor de Referencia del colesterol serico va de 125 a 200mg/dL",
    "Estas dentro de los valores de Referencia para el colesterol total serico, los cuales son de 125 a 200mg/dL",
    "Estas en hipercolesterolemia, tus valores estan por encima de los de referencia para Colesterol en sangre, los cuales son de 125 a 200mg/dL"
);

let hemoglobinaHombre = new ValorReferencia(
    "HEMOGLOBINA EN HOMBRES",
    13.8,
    17.2,
    "Tu hemoglobina esta baja, el Valor de Referencia de Hemoglobina en hombres va de 13.8 a 17.2mg/dL",
    "Estas dentro de los valores de referencia de Hemoglobina para hombre los cuales son 13.8 a 17.2mg/dL",
    "Tu valor de hemoglobina esta por encima de los de referencia para hombres, los cuales van de 13.8 a 17.2mg/dL"
);

let hemoglobinaMujer = new ValorReferencia(
    "HEMOGLOBINA EN MUJERES",
    12.1,
    15.1,
    "Tu hemoglobina esta baja, el Valor de Referencia de Hemoglobina en mujeres va de 12.1 a 15.1mg/dL",
    "Estas dentro de los valores de referencia de Hemoglobina para mujeres los cuales son 12.1 a 15.1mg/dL",
    "Tu valor de hemoglobina esta por encima de los de referencia para mujeres, los cuales van de 12.1 a 15.1mg/dL"
);

let neutrofilos = new ValorReferencia(
    "SEGMENTADOS NEUTROFILOS",
    2000,
    7500,
    "Estas cursando con Neutropenia, Segmentados Neutrofilos bajos, el Valor de referencia de neutrofilos va de 2000 a 7500 celulas por mL de sangre",
    "Tus valores de Segmentados neutrofilos se encuentran dentro de los valores normales  de 2000 a 7500 celulas por mL de sangre",
    "Cursas con una Neutrofilia, considerable aumento de los Segmentados Neutrofilos en sangre, es normalmente causada por infecciones recientes, o inclusive enfermedades inflamatorias "
);

// VARIABLES
const VRs = [
    glicemia, colesterol, hemoglobinaHombre, hemoglobinaMujer, neutrofilos
]

const vrContainer = document.querySelector(".vrContainer")
const inputContainer = document.querySelector(".inputContainer")
const lab = document.querySelector("#lab")

// EVENTOS
boton = document.querySelector("#boton")
boton.addEventListener('click', () => {
    mostrarVRs()
})

//FUNCIONES
function mostrarVRs() {
    VRs.forEach(element => {
        const divVR = document.createElement('div');
        divVR.classList.add('card');

        const nombreVr = document.createElement('h6')
        nombreVr.innerText = element.name

        const btnVR = document.createElement('button');
        btnVR.classList.add('btn', 'btn-sm')
        btnVR.innerText = "Analizar mi valor"
        btnVR.onclick = () => {
            // LIMPIAR CONTENEDOR
            inputContainer.replaceChildren()
            calcularValor(element.name);
        };
        divVR.appendChild(nombreVr)
        divVR.appendChild(btnVR)
        vrContainer.appendChild(divVR)
        boton.disabled = true;
    });
}

function calcularValor(name) {
    const vrSelec = VRs.find(vr => vr.name === name)

    const div = document.createElement('div');
    div.classList.add('card', 'gaize');

    const mensaje = document.createElement('h6');
    mensaje.innerText = `Ingresa tu valor de ` + name.toLowerCase();

    const div2 = document.createElement('div');
    div2.classList.add('input-group', 'mb-3');

    const input = document.createElement('input');
    input.classList.add('form-control');
    input.type = "text";
    // Agregando valor de Storage
    // Usando el OR ||
    input.placeholder = localStorage.getItem(vrSelec.name) || "..." ;

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-outline-secondary');
    button.type = "button";
    button.innerText = "Enter";
    button.onclick = () => {
        valor = input.value;
        if (valor === "") {
            lab.innerText = "Por favor ingresa un valor";
        } else if (valor < vrSelec.valorInferior) {
            lab.innerText = vrSelec.bajo;
        } else if (valor > vrSelec.valorInferior && valor < vrSelec.valorSuperior) {
            lab.innerText = vrSelec.normal;
        } else if (valor > vrSelec.valorSuperior) {
            lab.innerText = vrSelec.alto;
        } else {
            lab.innerText = "Por favor ingresa un valor numerico"
        }
        // STORAGE
        localStorage.setItem(vrSelec.name, valor);
    }
    div2.appendChild(input);
    div2.appendChild(button);
    div.appendChild(mensaje);
    div.appendChild(div2);
    inputContainer.appendChild(div);
}


function mostrarTodos() {
    show.replaceChildren();
    VRs.forEach((v) => {

// DESTRUCTURANDO
        const {name, valorInferior, valorSuperior, bajo, normal, alto} = v
        show.innerHTML += ` <br><br> VALOR: ${name}, Valor inferior: ${valorInferior} Valor Superior: ${valorSuperior}<br> Mensaje valor bajo: ${bajo} <br> Mensaje Valor Normal: ${normal}<br> Mensaje Valor Alto ${alto}`

    })}