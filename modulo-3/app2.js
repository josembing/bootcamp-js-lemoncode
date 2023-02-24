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

































//var retencion;
//var totalNeto1;
//var totalNeto2;
//var totalNeto3;
//var totalNeto4;
//
//if(empleado.bruto < 0 || empleado.bruto > 12000){
   // retencion = empleado.bruto * 0;
 //   totalNeto1 = empleado.bruto;
//}
//if(empleado.bruto < 0 || empleado.bruto > 24000){
 //   retencion = empleado.bruto * 0.08;
  //  totalNeto2 = empleado.bruto - retencion
//}
//if(empleado.bruto < 0 || empleado.bruto > 34000){
 //   retencion = empleado.bruto * 0.16;
 //   totalNeto3 = empleado.bruto - retencion;
//}
//if(empleado.bruto > 34000){
//   retencion = empleado.bruto * 0.30;
 //   totalNeto4 = empleado.bruto - retencion;
//}
//
//console.log("Total neto aplicando un 0%:" + ' ' + totalNeto1);
//console.log("Total neto aplicando un 8%:" + ' ' + totalNeto2);
//console.log("Total neto aplicando un 16%:" + ' ' + totalNeto3);
//console.log("Total neto aplicando un 30%:" + ' ' + totalNeto4);



