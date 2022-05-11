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

//ARRAY DE VALORES PROXIMOS
let pruebas = [
    `<h2>Por favor escribe alguna prueba, tenemos estas:<br><br></h2>Glicemia`,
    "Colesterol",
    "Hemoglobina",
    "<br><br>Proximamente:",
    "Trigliceridos",
    "Colesterol HDL",
    "Colesterol LDL",
    "VLDL",
    "Hematocrito",
    "Contaje Globulos Rojos",
    "Contaje Leucocitos",
    "Valores de Hemograma",
    "Y muchos mas.",
]



// VARIABLES
const VRs = [
    glicemia, colesterol, hemoglobinaHombre, hemoglobinaMujer
]

const vrContainer = document.querySelector(".vrContainer")
const inputContainer = document.querySelector(".inputContainer")
const lab = document.querySelector("#lab")




// EVENTOS

boton = document.querySelector("#boton")
boton.addEventListener('click', () => {
    mostrarVRs()
})

// document.addEventListener('DOMContentLoaded', () =>{
//     mostrarVRs()
// })




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
            calcularValor(element.name)
            btnVR.disabled = true;
        };


        divVR.appendChild(nombreVr)
        divVR.appendChild(btnVR)

        vrContainer.appendChild(divVR)
        boton.disabled = true;
    });
}

function calcularValor(name) {
    const vrSelec = VRs.find(vr => vr.name === name)
    // const tst = vrSelec.name

    console.log(vrSelec)
    const div = document.createElement('div');
    div.classList.add('card', 'gaize');

    const mensaje = document.createElement('h6');
    mensaje.innerText = `Ingresa tu valor de ` + name.toLowerCase();



    const div2 = document.createElement('div');
    div2.classList.add('input-group', 'mb-3');
    const input = document.createElement('input');
    input.classList.add('form-control');
    input.type = "text";
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
    }
    div2.appendChild(input);
    div2.appendChild(button);
    div.appendChild(mensaje);
    div.appendChild(div2);
    inputContainer.appendChild(div);






    // switch (tst){
    //     case "GLICEMIA O GLUCEMIA":
    //         lab.innerText = glicemia.name + ` de ` + glicemia.valorInferior + ` a ` + glicemia.valorSuperior +`mg/dL`

    //         break;
    //     case "COLESTEROL TOTAL":
    //         lab.innerText = colesterol.name + ` de ` + colesterol.valorInferior + ` a ` + colesterol.valorSuperior +`mg/dL`
    //         break;
    //     case "HEMOGLOBINA EN HOMBRES":
    //         lab.innerText = hemoglobinaHombre.name + ` de ` + hemoglobinaHombre.valorInferior + ` a ` + hemoglobinaHombre.valorSuperior +`mg/dL`
    //         break;
    //     case "HEMOGLOBINA EN MUJERES":
    //         lab.innerText = hemoglobinaMujer.name + ` de ` + hemoglobinaMujer.valorInferior + ` a ` + hemoglobinaMujer.valorSuperior +`mg/dL`
    //         break;
    // }







    // function calcularValor(name){
    //     const vrSelec = VRs.find(vr => vr.name === name)
    //     const tst = vrSelec.name

    //     switch (tst){
    //         case "GLICEMIA O GLUCEMIA":
    //             lab.innerText = glicemia.name + ` de ` + glicemia.valorInferior + ` a ` + glicemia.valorSuperior +`mg/dL`

    //             break;
    //         case "COLESTEROL TOTAL":
    //             lab.innerText = colesterol.name + ` de ` + colesterol.valorInferior + ` a ` + colesterol.valorSuperior +`mg/dL`
    //             break;
    //         case "HEMOGLOBINA EN HOMBRES":
    //             lab.innerText = hemoglobinaHombre.name + ` de ` + hemoglobinaHombre.valorInferior + ` a ` + hemoglobinaHombre.valorSuperior +`mg/dL`
    //             break;
    //         case "HEMOGLOBINA EN MUJERES":
    //             lab.innerText = hemoglobinaMujer.name + ` de ` + hemoglobinaMujer.valorInferior + ` a ` + hemoglobinaMujer.valorSuperior +`mg/dL`
    //             break;
    //     }

    // }

    // //Funcion arrow para calcular valor
    // let calcularValor = () => {
    //     // Prompt 1 Que valor?


    //     let tst = prompt("Que valor de referencia deseas consultar?")
    //         .toLowerCase()
    //         .trim();

    //     // sentencia.innerHTML = "Que valor de referencia deseas consultar?"
    //     // boton.addEventListener('click',()=> {
    //     //     tst = entrada.value;
    //     // })





    //     // let tst;
    //     // sentencia.innerHTML= "Que valor de referencia deseas consultar?"
    //     // boton.addEventListener('click',() => {
    //     //     tst = entrada.value
    //     // } )




    //     switch (tst) {
    //         case "glicemia":            
    //             let valor = prompt("Cual es tu valor de glicemia?").trim();
    //             if (valor <= glicemia.valorInferior) {
    //                 lab.innerHTML = `${glicemia.bajo}<br> y la tuya esta en ${valor}mg/dL`;
    //                 break;
    //             } else if (
    //                 valor > glicemia.valorInferior &&
    //                 valor < glicemia.valorSuperior
    //             ) {
    //                 lab.innerHTML = `${glicemia.normal}<br> y la tuya esta en ${valor}mg/dL`;
    //                 break;
    //             } else if (valor >= glicemia.valorSuperior) {
    //                 lab.innerHTML = `${glicemia.alto}<br> y la tuya esta en ${valor}mg/dL<br>Atent@ a una posible diabetes, si estos valores son cronicos deberias ir a un Endocrinologo`;
    //                 break;
    //             } else {
    //                 lab.innerHTML = "Por favor ingesa un numero valido";
    //                 break;
    //             }
    //             case "colesterol":
    //                 let valorc = prompt("Cual es tu valor de Colesterol Total?").trim();
    //                 if (valorc <= colesterol.valorInferior) {
    //                     lab.innerHTML = `${colesterol.bajo}<br> y el tuyo esta en ${valorc}mg/dL`;
    //                     break;
    //                 } else if (
    //                     valorc > colesterol.valorInferior &&
    //                     valorc < colesterol.valorSuperior
    //                 ) {
    //                     lab.innerHTML = `${colesterol.normal}<br> y el tuyo esta en ${valorc}mg/dL`;
    //                     break;
    //                 } else if (valorc >= colesterol.valorSuperior) {
    //                     lab.innerHTML = `${colesterol.alto}<br> y el tuyo esta en ${valorc}mg/dL<br>Atent@, esto junto a obesidad abdominal aumentan los riesgos de un accidente cardiovascular`;
    //                     break;
    //                 } else {
    //                     lab.innerHTML = "Por favor ingesa un numero valido";
    //                     break;
    //                 }
    //                 case "hemoglobina":
    //                     let sex = prompt("Hemoglobina en Hombre o Mujer?").toLowerCase().trim();

    //                     if (sex == "hombre") {
    //                         let valorh = prompt("Cual es tu valor de hemoglobina?");
    //                         if (valorh <= hemoglobinaHombre.valorInferior) {
    //                             lab.innerHTML = `${hemoglobinaHombre.bajo}<br> y la tuya esta en ${valorh}mg/dL, estos valores estan muy relacionados a anemias`;
    //                             break;
    //                         } else if (
    //                             valorh > hemoglobinaHombre.valorInferior &&
    //                             valorh < hemoglobinaHombre.valorSuperior
    //                         ) {
    //                             lab.innerHTML = `${hemoglobinaHombre.normal}<br> la tuya esta en ${valorh}mg/dL`;
    //                             break;
    //                         } else if (valorh >= hemoglobinaHombre.valorSuperior) {
    //                             lab.innerHTML = `${hemoglobinaHombre.alto}<br> y la tuya esta en ${valorh}mg/dL<br>Atento, este es un clasico sintoma de Policitemia vera, deberias llevarle tus resultados a un Hematologo`;
    //                             break;
    //                         } else {
    //                             lab.innerHTML = "Por favor ingesa un numero valido";
    //                             break;
    //                         }
    //                     } else if (sex == "mujer") {
    //                         let valorh = prompt("Cual es tu valor de hemoglobina?").trim();
    //                         if (valorh <= hemoglobinaMujer.valorInferior) {
    //                             lab.innerHTML = `${hemoglobinaMujer.bajo}<br> y la tuya mi amor, esta en ${valorh}mg/dL, esta esta muy relacionada a anemias`;
    //                             break;
    //                         } else if (
    //                             valorh > hemoglobinaMujer.valorInferior &&
    //                             valorh < hemoglobinaMujer.valorSuperior
    //                         ) {
    //                             lab.innerHTML = `${hemoglobinaMujer.normal}<br> y la tuya esta en ${valorh}mg/dL`;
    //                             break;
    //                         } else if (valorh >= hemoglobinaMujer.valorSuperior) {
    //                             lab.innerHTML = `${hemoglobinaMujer.alto}<br> y la tuya esta en ${valorh}mg/dL<br>Atenta, este es un clasico sintoma de Policitemia vera, deberias llevarle tus resultados a un Hematologo`;
    //                             break;
    //                         } else {
    //                             lab.innerHTML = "Por favor ingesa un numero valido";
    //                             break;
    //                         }
    //                     } else {
    //                         lab.innerHTML = "Por favor escribe un valor valido en genero";
    //                         break;
    //                     }
    //                     default:
    //                         //Temporizador para refrescar
    //                         setTimeout(function () {
    //                             window.location.reload();
    //                         }, 5000);
    //                         //For loop para mostrar pruebas disponibles
    //                         for (i = 0; i < pruebas.length; i = i + 1)
    //                             lab.innerHTML += "<br>" + pruebas[i] + "<br>";
    //                         break;
    //     }
    // };


    function mostrarTodos() {
        let disponibles = [glicemia, colesterol, hemoglobinaHombre, hemoglobinaMujer]


        disponibles.forEach((d) => {
            let show = document.querySelector("#show")
            show.innerHTML += `<br><br> NOMBRE: ` + d.name + ` de ` + d.valorInferior + ` a ` + d.valorSuperior + `mg/dL  <br> MENSAJE VALOR ALTO: ` + d.alto + ` <br>MENSAJE VALOR BAJO: ` + d.bajo + ` <br>MENSAJE VALOR NORMAL: ` + d.normal
            // show.innerHTML += `<br>`+ JSON.stringify(d)
        })
    }
}