// alert()

// VR Glicemia
let B_gli = (80);
let T_gli = (110);

// VR Colesterol total
const B_colTotal = (125);
const T_colTotal = (200);

// VR Hemoglobina
const B_hbHombre = (13.8);
const T_hbHombre = (17.2);

const B_hbMujer = (12.1);
const T_hbMujer = (15.1);

let pruebas = [`<h2>Por favor escribe alguna prueba, tenemos estas:<br><br></h2>Glicemia`, "Colesterol", "Hemoglobina", "<br><br>Proximamente:", "Trigliceridos", "Colesterol HDL", "Colesterol LDL", "VLDL", "Hematocrito", "Contaje Globulos Rojos", "Contaje Leucocitos", "Valores de Hemograma", "Y muchos mas."]



//Funcion arrow para calcular valor
let calcularValor = () => {
    //Prompt 1 Que valor?
    let tst = prompt("Que valor de referencia deseas consultar?").toLowerCase();

    switch (tst) {
        case "glicemia":
            let valor = prompt("Cual es tu valor de glicemia?");
            if (valor <= B_gli) {
                lab.innerHTML = "Estas en hipoglicemia, el Valor de Referencia de la glicemia va de " + B_gli + " a " + T_gli + "mg/dL <br> y la tuya esta en " + valor + "mg/dL";
                break;
            } else if (valor > B_gli && valor < T_gli) {
                lab.innerHTML = "Estas dentro de los valores de Referencia para Glucosa en Sangre, los cuales son " + B_gli + " a " + T_gli + "mg/dL <br> y la tuya esta en " + valor + "mg/dL";
                break;
            } else if (valor >= T_gli) {
                lab.innerHTML = "Estas en Hiperglicemia, tus valores estan por encima de los de referencia para glucosa en sangre, los cuales son " + B_gli + " a " + T_gli + "mg/dL <br> y la tuya esta en " + valor + "mg/dL<br>Atent@ a una posible diabetes, si estos valores son cronicos deberias ir a un Endocrinologo";
                break;
            } else {
                lab.innerHTML = "Por favor ingesa un numero valido";
                break;
            }
            case "colesterol":
                let valorc = prompt("Cual es tu valor de Colesterol Total?");
                if (valorc <= B_colTotal) {
                    lab.innerHTML = "Estas en hipocolesterolemia, el Valor de Referencia del colesterol serico va de " + B_colTotal + " a " + T_colTotal + "mg/dL<br> y el tuyo esta en " + valorc + "mg/dL";
                    break;
                } else if (valorc > B_colTotal && valorc < T_colTotal) {
                    lab.innerHTML = "Estas dentro de los valores de Referencia para el colesterol total serico, los cuales son " + B_colTotal + " a " + T_colTotal + "mg/dL<br> y el tuyo esta en " + valorc + "mg/dL";
                    break;
                } else if (valorc >= T_colTotal) {
                    lab.innerHTML = "Estas en hipercolesterolemia, tus valores estan por encima de los de referencia para Colesterol en sangre, los cuales son " + B_colTotal + " a " + T_colTotal + "mg/dL<br> y el tuyo esta en " + valorc + "mg/dL<br>Atent@, esto junto a obesidad abdominal aumentan los riesgos de un accidente cardiovascular";
                    break;
                } else {
                    lab.innerHTML = "Por favor ingesa un numero valido";
                    break;
                }
                case "hemoglobina":
                    let sex = prompt("Hemoglobina en Hombre o Mujer?")

                    if (sex == "hombre") {
                        let valorh = prompt("Cual es tu valor de hemoglobina?");
                        if (valorh <= B_hbHombre) {
                            lab.innerHTML = "Tu hemoglobina esta baja, el Valor de Referencia de Hemoglobina en hombres va de " + B_hbHombre + " a " + T_hbHombre + "mg/dL<br> y la tuya esta en " + valorh + "mg/dL, esta esta muy relacionada a anemias";
                            break;
                        } else if (valorh > B_hbHombre && valorh < T_hbHombre) {
                            lab.innerHTML = "Estas dentro de los valores de Referencia Hemoglobina en hombres, los cuales son " + B_hbHombre + " a " + T_hbHombre + "mg/dL<br> la tuya esta en " + valorh + "mg/dL";
                            break;
                        } else if (valorh >= T_hbHombre) {
                            lab.innerHTML = "Tu valor de hemoglobina esta por encima de los de referencia para hombres, los cuales son " + B_hbHombre + " a " + T_hbHombre + "mg/dL<br> y la tuya esta en " + valorh + "mg/dL<br>Atento, este es un clasico sintoma de Policitemia vera, deberias llevarle tus resultados a un Hematologo";
                            break;
                        } else {
                            lab.innerHTML = "Por favor ingesa un numero valido";
                            break;
                        }
                    } else if (sex == "mujer") {
                        let valorh = prompt("Cual es tu valor de hemoglobina?");
                        if (valorh <= B_hbMujer) {
                            lab.innerHTML = "Tu hemoglobina esta baja, el Valor de Referencia de Hemoglobina en mujeres va de " + B_hbMujer + " a " + T_hbMujer + "mg/dL<br> y la tuya mi amor, esta en " + valorh + "mg/dL, esta esta muy relacionada a anemias";
                            break;
                        } else if (valorh > B_hbMujer && valorh < T_hbMujer) {
                            lab.innerHTML = "Estas dentro de los valores de Referencia de Hemoglobina en mujeres, los cuales son " + B_hbMujer + " a " + T_hbMujer + "mg/dL<br> y la tuya esta en " + valorh + "mg/dL";
                            break;
                        } else if (valorh >= T_hbMujer) {
                            lab.innerHTML = "Tu valor de hemoglobina esta por encima de los de referencia para mujeres, los cuales son " + B_hbMujer + " a " + T_hbMujer + "mg/dL<br> y la tuya esta en " + valorh + "mg/dL<br>Atenta, este es un clasico sintoma de Policitemia vera, deberias llevarle tus resultados a un Hematologo";
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
                            document.write("<br>" + pruebas[i] + "<br>")
                        break;


    }
}
