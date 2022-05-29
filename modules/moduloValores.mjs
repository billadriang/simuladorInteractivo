export {glicemia, colesterol, hemoglobinaHombre, hemoglobinaMujer, neutrofilos, trigliceridos};

// PLANTILLA DE VALORES DE REFERENCIA 
class ValorReferencia {
    constructor(name, valorInferior, valorSuperior, bajo, normal, alto, unidad) {
        this.name = name;
        this.valorInferior = valorInferior;
        this.valorSuperior = valorSuperior;
        this.bajo = bajo;
        this.normal = normal;
        this.alto = alto;
        this.unidad = unidad;
    }
}
// let VALOR A AGREGAR = new ValorReferencia(RANGO INFERIOR, RANGO SUPERIOR, MENSAJE VALOR BAJO, MENSAJE VALOR NORMAL, MENSAJE VALOR ALTO
let glicemia = new ValorReferencia(
    "GLICEMIA O GLUCEMIA",
    80,
    110,
    "Estas en hipoglicemia, el Valor de Referencia de la glicemia va de  80 a 110 mg/dL",
    "Estas dentro de los valores de Referencia para Glucosa en Sangre, los cuales son de 80 a 110mg/dL",
    "Estas en Hiperglicemia, tus valores estan por encima de los de referencia para glucosa en sangre, los cuales son de 80 a 110mg/dL",
    "mg/dL"
);

let colesterol = new ValorReferencia(
    "COLESTEROL TOTAL",
    125,
    200,
    "Estas en hipocolesterolemia, el Valor de Referencia del colesterol serico va de 125 a 200mg/dL",
    "Estas dentro de los valores de Referencia para el colesterol total serico, los cuales son de 125 a 200mg/dL",
    "Estas en hipercolesterolemia, tus valores estan por encima de los de referencia para Colesterol en sangre, los cuales son de 125 a 200mg/dL",
    "mg/dL"
);

let hemoglobinaHombre = new ValorReferencia(
    "HEMOGLOBINA EN HOMBRES",
    13.8,
    17.2,
    "Tu hemoglobina esta baja, el Valor de Referencia de Hemoglobina en hombres va de 13.8 a 17.2mg/dL",
    "Estas dentro de los valores de referencia de Hemoglobina para hombre los cuales son 13.8 a 17.2mg/dL",
    "Tu valor de hemoglobina esta por encima de los de referencia para hombres, los cuales van de 13.8 a 17.2mg/dL",
    "mg/dL"
);

let hemoglobinaMujer = new ValorReferencia(
    "HEMOGLOBINA EN MUJERES",
    12.1,
    15.1,
    "Tu hemoglobina esta baja, el Valor de Referencia de Hemoglobina en mujeres va de 12.1 a 15.1mg/dL",
    "Estas dentro de los valores de referencia de Hemoglobina para mujeres los cuales son 12.1 a 15.1mg/dL",
    "Tu valor de hemoglobina esta por encima de los de referencia para mujeres, los cuales van de 12.1 a 15.1mg/dL",
    "mg/dL"
);

let neutrofilos = new ValorReferencia(
    "SEGMENTADOS NEUTROFILOS",
    2000,
    7500,
    "Estas cursando con Neutropenia, Segmentados Neutrofilos bajos, el Valor de referencia de neutrofilos va de 2000 a 7500 celulas por mL de sangre",
    "Tus valores de Segmentados neutrofilos se encuentran dentro de los valores normales  de 2000 a 7500 celulas por mL de sangre",
    "Cursas con una Neutrofilia, considerable aumento de los Segmentados Neutrofilos en sangre, es normalmente causada por infecciones recientes, o inclusive enfermedades inflamatorias ",
    "celulas/mL sangre"
);

let trigliceridos = new ValorReferencia(
    "TRIGLICERIDOS",
    50,
    150,
    "Estas cursando con Hipotrigliceridemia, niveles bastante bajos de trigliceridos en sangre los valores de referencia en Adulto se encuentran de 50  a 150mg/dL",
    "Tus valores se encuentran dentro de los de referencia los cuales van de 50 y 150mg/dL",
    "Te encuentras en hipertrigliceridemia, valores muy altos de trigliceridos en sangre, esto va normalmente asociado a Obesidad y enfermedades coronarias, los valores de referencia para adultos van de 50 a 150mg/dL",
    "mg/dL"
);
