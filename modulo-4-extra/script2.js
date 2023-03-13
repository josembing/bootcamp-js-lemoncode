function calcular() { 
    var result = 0;
    var categoria = getCategoria();
    var spa = getSPA();
    result = categoria + spa;
    result = getOcupacion(result);
    var NumNoches = document.getElementById("NumNoches").value;
    result = NumNoches * result;
    var Nochesparking = getNochesparking();
    result = result + Nochesparking;
    console.log(result);
}

function getCategoria() {
    var tipoHabitacion = document.getElementById("habitacion").value;
    console.log(tipoHabitacion);
    if (tipoHabitacion == "Standard") {
        return 100;
    }
    else if (tipoHabitacion == "Junior Suite") {
        return 120;
    }
    else if(tipoHabitacion == "Suite") {
        return 150;
    }

}

function getSPA() {
    var spa = document.getElementById("SPA").checked;
    console.log(spa);
    if (spa == true) {
        return 20;
    }
    else if (spa == false) {
        return 0;   
    }

}

function getOcupacion(tarifa) {
    var ocupacion = document.getElementById("ocupacion").value;
    console.log(ocupacion);
    var porcentaje = tarifa * 0.25;
    if (ocupacion == "Individual") {
        return tarifa - porcentaje;
    }
    else if (ocupacion == "Doble") {
        return tarifa
    }
    else if(ocupacion == "Triple") {
        return tarifa + porcentaje;
    }
}


function getNochesparking() {
    var NochesParking = document.getElementById("NochesParking").value;
    return NochesParking * 10;
}


