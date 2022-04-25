// alert()

// // VR Glicemia
// let glicemia.valorInferior = (80);
// let glicemia.valorSuperior = (110);

// // VR Colesterol total
// const B_colTotal = (125);
// const T_colTotal = (200);

// // VR Hemoglobina
// const B_hbHombre = (13.8);
// const T_hbHombre = (17.2);

// const B_hbMujer = (12.1);
// const T_hbMujer = (15.1);


class ValorReferencia {
    constructor(valorInferior,valorSuperior,bajo,normal,alto) {
        this.valorInferior = valorInferior;
        this.valorSuperior = valorSuperior;
        this.bajo = bajo;
        this.normal = normal;
        this.alto = alto;
    }
}


// let VALOR A AGREGAR = new ValorReferencia(RANGO INFERIOR, RANGO SUPERIOR, MENSAJE VALOR BAJO, MENSAJE VALOR NORMAL, MENSAJE VALOR ALTO)

let glicemia = new ValorReferencia(80,110,"Estas en hipoglicemia, el Valor de Referencia de la glicemia va de  80 a 110 mg/dL","Estas dentro de los valores de Referencia para Glucosa en Sangre, los cuales son de 80 a 110mg/dL","Estas en Hiperglicemia, tus valores estan por encima de los de referencia para glucosa en sangre, los cuales son de 80 a 110mg/dL")

let colesterol = new ValorReferencia(125,200,"Estas en hipocolesterolemia, el Valor de Referencia del colesterol serico va de 125 a 200mg/dL","Estas dentro de los valores de Referencia para el colesterol total serico, los cuales son de 125 a 200mg/dL","Estas en hipercolesterolemia, tus valores estan por encima de los de referencia para Colesterol en sangre, los cuales son de 125 a 200mg/dL")

let hemoglobinaHombre = new ValorReferencia(13.8,17.2,"Tu hemoglobina esta baja, el Valor de Referencia de Hemoglobina en hombres va de 13.8 a 17.2mg/dL","Estas dentro de los valores de referencia de Hemoglobina para hombre los cuales son 13.8 a 17.2mg/dL","Tu valor de hemoglobina esta por encima de los de referencia para hombres, los cuales van de 13.8 a 17.2mg/dL")

let hemoglobinaMujer = new ValorReferencia(12.1,15.1,"Tu hemoglobina esta baja, el Valor de Referencia de Hemoglobina en mujeres va de 12.1 a 15.1mg/dL","Estas dentro de los valores de referencia de Hemoglobina para mujeres los cuales son 12.1 a 15.1mg/dL","Tu valor de hemoglobina esta por encima de los de referencia para mujeres, los cuales van de 12.1 a 15.1mg/dL")



//ARRAY DE VALORES PROXIMOS
let pruebas = [`<h2>Por favor escribe alguna prueba, tenemos estas:<br><br></h2>Glicemia`, "Colesterol", "Hemoglobina", "<br><br>Proximamente:", "Trigliceridos", "Colesterol HDL", "Colesterol LDL", "VLDL", "Hematocrito", "Contaje Globulos Rojos", "Contaje Leucocitos", "Valores de Hemograma", "Y muchos mas."]



//Funcion arrow para calcular valor
let calcularValor = () => {
    //Prompt 1 Que valor?
    let tst = prompt("Que valor de referencia deseas consultar?").toLowerCase().trim();

    switch (tst) {
        case "glicemia":
            let valor = prompt("Cual es tu valor de glicemia?").trim();
            if (valor <= glicemia.valorInferior) {
                lab.innerHTML = `${glicemia.bajo}<br> y la tuya esta en ${valor}mg/dL`;
                break;
            } else if (valor > glicemia.valorInferior && valor < glicemia.valorSuperior) {
                lab.innerHTML = `${glicemia.normal}<br> y la tuya esta en ${valor}mg/dL`;
                break;
            } else if (valor >= glicemia.valorSuperior) {
                lab.innerHTML = `${glicemia.alto}<br> y la tuya esta en ${valor}mg/dL<br>Atent@ a una posible diabetes, si estos valores son cronicos deberias ir a un Endocrinologo`;
                break;
            } else {
                lab.innerHTML = "Por favor ingesa un numero valido";
                break;
            }
            case "colesterol":
                let valorc = prompt("Cual es tu valor de Colesterol Total?").trim();
                if (valorc <= colesterol.valorInferior) {
                    lab.innerHTML = `${colesterol.bajo}<br> y el tuyo esta en ${valorc}mg/dL`;
                    break;
                } else if (valorc > colesterol.valorInferior && valorc < colesterol.valorSuperior) {
                    lab.innerHTML = `${colesterol.normal}<br> y el tuyo esta en ${valorc}mg/dL`;
                    break;
                } else if (valorc >= colesterol.valorSuperior) {
                    lab.innerHTML = `${colesterol.alto}<br> y el tuyo esta en ${valorc}mg/dL<br>Atent@, esto junto a obesidad abdominal aumentan los riesgos de un accidente cardiovascular`;
                    break;
                } else {
                    lab.innerHTML = "Por favor ingesa un numero valido";
                    break;
                }
                case "hemoglobina":
                    let sex = prompt("Hemoglobina en Hombre o Mujer?").toLowerCase().trim();

                    if (sex == "hombre") {
                        let valorh = prompt("Cual es tu valor de hemoglobina?");
                        if (valorh <= hemoglobinaHombre.valorInferior) {
                            lab.innerHTML = `${hemoglobinaHombre.bajo}<br> y la tuya esta en ${valorh}mg/dL, estos valores estan muy relacionados a anemias`;
                            break;
                        } else if (valorh > hemoglobinaHombre.valorInferior && valorh < hemoglobinaHombre.valorSuperior) {
                            lab.innerHTML = `${hemoglobinaHombre.normal}<br> la tuya esta en ${valorh}mg/dL`;
                            break;
                        } else if (valorh >= hemoglobinaHombre.valorSuperior) {
                            lab.innerHTML = `${hemoglobinaHombre.alto}<br> y la tuya esta en ${valorh}mg/dL<br>Atento, este es un clasico sintoma de Policitemia vera, deberias llevarle tus resultados a un Hematologo`;
                            break;
                        } else {
                            lab.innerHTML = "Por favor ingesa un numero valido";
                            break;
                        }
                    } else if (sex == "mujer") {
                        let valorh = prompt("Cual es tu valor de hemoglobina?").trim();
                        if (valorh <= hemoglobinaMujer.valorInferior) {
                            lab.innerHTML = `${hemoglobinaMujer.bajo}<br> y la tuya mi amor, esta en ${valorh}mg/dL, esta esta muy relacionada a anemias`;
                            break;
                        } else if (valorh > hemoglobinaMujer.valorInferior && valorh < hemoglobinaMujer.valorSuperior) {
                            lab.innerHTML = `${hemoglobinaMujer.normal}<br> y la tuya esta en ${valorh}mg/dL`;
                            break;
                        } else if (valorh >= hemoglobinaMujer.valorSuperior) {
                            lab.innerHTML = `${hemoglobinaMujer.alto}<br> y la tuya esta en ${valorh}mg/dL<br>Atenta, este es un clasico sintoma de Policitemia vera, deberias llevarle tus resultados a un Hematologo`;
                            break
                        } else {
                            lab.innerHTML = "Por favor ingesa un numero valido";
                            break;
                        }

                    } else {
                        lab.innerHTML = "Por favor escribe un valor valido en genero";
                        break;

                    }
                    default:
                        //Temporizador para refrescar
                        setTimeout(function () {
                            window.location.reload();
                        }, 5000);
                        //For loop para mostrar pruebas disponibles 
                        for (i = 0; i < pruebas.length; i = i + 1)
                            lab.innerHTML += "<br>" + pruebas[i] + "<br>"
                        break;


    }
}
