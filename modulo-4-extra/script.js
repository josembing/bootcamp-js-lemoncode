var result = 0;
var operacionAnterior;

function calcular(operacion){
    switch (operacionAnterior) {
        case "suma":
            suma(operacion);
            
            break;
        case "resta":
            resta(operacion);
            break;
        case "multiplicacion":
            multiplicacion(operacion);
            break;
        case "division":
            division(operacion);
            break;
        default:
            inicio(operacion);
            break;

    }

    if(operacion != "igual"){
        operacionAnterior = operacion;
        document.getElementById("number").value = undefined;
    } else {
        operacionAnterior = undefined;
        document.getElementById("number").value = result;
    }   
    
}

function inicio() {
    result = Number(document.getElementById("number").value);
}

function suma() {
    var numero = Number(document.getElementById("number").value);
    result = result + numero;
}

function resta() {
    var numero = Number(document.getElementById("number").value);
    result = result - numero;
}

function multiplicacion() {
    var numero = Number(document.getElementById("number").value);
    result = result * numero;
}

function division() {
    var numero = Number(document.getElementById("number").value);
    result = result / numero;
}

