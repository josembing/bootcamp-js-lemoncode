const empleado = {
  bruto: 14500,
  hijos: 2,
  pagas: 14,
};

var retencion;
var netoAnual;



if(empleado.bruto < 12000){
    retencion = empleado.bruto * 0;
    netoAnual = empleado.bruto - retencion;
}
else if(empleado.bruto > 12000 || empleado.bruto < 24000){
  retencion = empleado.bruto * 0.08;
  netoAnual = empleado.bruto - retencion;
}

if(empleado.bruto > 24000 || empleado.bruto < 34000){
  retencion = empleado.bruto * 0.16;
  netoAnual = empleado.bruto - retencion
}
else if(empleado.bruto > 34000){
  retencion = empleado.bruto * 0.30;
  netoAnual = empleado.bruto - retencion;
}


if(empleado.hijos > 0){
    retencion = empleado.bruto * 0.06;
    netoAnual = empleado.bruto - retencion;
}

var netoMensual;
netoMensual = netoAnual / 14;

console.log("Neto anual aplicando un 6% de retención, ya que tiene 2 hijos:" + ' ' + netoAnual + "€");
console.log("Neto mensual:" + ' ' + netoMensual + "€");
