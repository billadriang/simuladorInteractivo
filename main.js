import {glicemia, colesterol, hemoglobinaHombre, hemoglobinaMujer, neutrofilos} from './modules/moduloValores.mjs';

// VARIABLES
const VRs = [
    glicemia, colesterol, hemoglobinaHombre, hemoglobinaMujer, neutrofilos
]

const vrContainer = document.querySelector(".vrContainer");
const inputContainer = document.querySelector(".inputContainer");
const lab = document.querySelector("#lab");
const boton2 = document.querySelector("#boton2");
const boton = document.querySelector("#boton");
//VOZ
let voz = new SpeechSynthesisUtterance();
voz.lang = "es-US";
voz.volume = 0.2;

// EVENTOS
boton.addEventListener('click', () => {
    mostrarVRs()
});

boton2.addEventListener('click', () =>{
    mostrarTodo()
});

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
            // Libreria Tostify
            Toastify({
                text: ` va de ${element.valorInferior} a ${element.valorSuperior} ${element.unidad}`,
                duration: 4000
            }
            ).showToast();
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
        const valor = input.value;
        if (valor === "") {
            lab.innerText = "Por favor ingresa un valor";
            voz.text = "Por favor ingresa un valor";
            speechSynthesis.speak(voz)
            //Libreria sweetalert2
            Swal.fire({
                icon: 'error',
                title: '😕 Porfa ingresa algun valor',
            })
        } else if (valor < vrSelec.valorInferior) {
            lab.innerText = vrSelec.bajo;
            voz.text = vrSelec.bajo;
            speechSynthesis.speak(voz);
            
        } else if (valor > vrSelec.valorInferior && valor < vrSelec.valorSuperior) {
            lab.innerText = vrSelec.normal;
            voz.text = vrSelec.normal;
            speechSynthesis.speak(voz);

        } else if (valor > vrSelec.valorSuperior) {
            lab.innerText = vrSelec.alto;
            voz.text = vrSelec.alto;
            speechSynthesis.speak(voz);
        } else {
            lab.innerText = "Por favor ingresa un valor numérico";
            voz.text = "Por favor, ingresa un valor numérico";
            speechSynthesis.speak(voz);
            //Libreria sweetalert2
            Swal.fire({
                icon: 'error',
                title: '😕 Porfa agrega un valor numérico!',
            })
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


function mostrarTodo() {
    // Toastify
    Toastify({
        text: " Aqui estan todos los VRs 👨🏻‍💻",
        },).showToast();
    show.replaceChildren();
    VRs.forEach((v) => {

// DESTRUCTURANDO
        const {name, valorInferior, valorSuperior, bajo, normal, alto} = v
        show.innerHTML += ` <br><br> VALOR: ${name}, Valor inferior: ${valorInferior} Valor Superior: ${valorSuperior}<br> Mensaje valor bajo: ${bajo} <br> Mensaje Valor Normal: ${normal}<br> Mensaje Valor Alto ${alto}`
    })};

