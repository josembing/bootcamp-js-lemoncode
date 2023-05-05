// **MOSTRAR EL CARRITO Y LISTAR TODOS LOS PRODUCTOS**

const carrito = [
{
id: 198752,
name: "Tinta DJ27 Color",
price: 52.95,
count: 3,
premium: true
},
{
id: 75621,
name: "Impresora ticketera PRO-201",
price: 32.75,
count: 2,
premium: true
},
{
id: 54657,
name: "Caja de rollos de papel para ticketera",
price: 5.95,
count: 3,
premium: false
},
{
id: 3143,
name: "Caja de folios DIN-A4 80gr",
price: 9.95,
count: 2,
premium: false
}
];

// **ELIMINAR EL PRODUCTO CON ID: 54657**

// var indice;

// function eliminar (id54657) {
//   for (i = 0; i < carrito.length; i++) {
//     if (carrito[i].id == 54657) {
//      carrito.splice(i, 1);
//     }
//   }
// }

// for (producto of carrito) {
//    imprimir(producto);
// }

// function imprimir (producto) {
//    console.log("id:" + producto.id);
//    console.log("name:" + producto.name);
//    console.log("price:" + producto.price);
//    console.log("count:" + producto.count);
//    console.log("premium:" + producto.premium);
// }


// **CALCULAR EL TOTAL DEL CARRITO DE LA COMPRA**

// var total = 0;

// for (i = 0; i< carrito.length; i++) {
//    total += carrito[i].price * carrito[i].count;
//    console.log("=========");
//    console.log(carrito[i].name);
//    console.log("---");
// }

// console.log("Total del carrito: ", total);


// **FILTRAR LOS PRODUCTOS QUE SEAN PRIME**

// var prime_list = [];

// var prime_;

// for (i = 0; i < carrito.length; i++) {
//    if (carrito[i].premium == true) {
//        prime_list.push(carrito[i]);
//    };

// }

// console.log(prime_list);



// ** SI TODOS LOS PRODUCTOS SON PRIME MOSTRAR "PEDIDOS SIN GASTOS DE ENVÍO", SINO "ESTE PEDIDO TIENE GASTOS DE ENVÍO".

//  var prime_list = [];

//  var prime_;

//  function envío () {
//   for (i = 0; i < carrito.length; i++) {
//     if (carrito[i].premium == true) {
//        window.alert("Pedido sin gastos de envío")
//     }
//  };
//  }



// **MOSTRAR EL CARRITO EN UN LISTADO DE HTML BÁSICO**

// document.body.onload = addElement;

// function addElement () {
//   for (i = 0; i < carrito.length; i++) {
//     const element = carrito[i];
//   }

//   var newDiv = document.createElement("div");
//   var newContent = document.createTextNode("Tinta DJ27 Color");
//   newDiv.appendChild(newContent);

//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);



//   var newDiv = document.createElement("div");
//   var newContent = document.createTextNode("Impresora ticketera PRO-201");
//   newDiv.appendChild(newContent);

//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);



//   var newDiv = document.createElement("div");
//   var newContent = document.createTextNode("Caja de rollos de papel para ticketera");
//   newDiv.appendChild(newContent);

//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);



//   var newDiv = document.createElement("div");
//   var newContent = document.createTextNode("Caja de folios DIN-A4 80gr");
//   newDiv.appendChild(newContent);

//   var currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);



//   var p = document.createElement("p");
// document.body.appendChild(p);
// }



// **APLICAR UN DESCUENTO DEL 5% SI LA COMPRA ES MAYOR DE 100 EUROS**

// const carrito = [
// {
// id: 198752,
// name: "Tinta DJ27 Color",
// price: 52.95,
// count: 3,
// premium: true
// },
// {
// id: 75621,
// name: "Impresora ticketera PRO-201",
// price: 32.75,
// count: 2,
// premium: true
// },
// {
// id: 54657,
// name: "Caja de rollos de papel para ticketera",
// price: 5.95,
// count: 3,
// premium: false
// },
// {
// id: 3143,
// name: "Caja de folios DIN-A4 80gr",
// price: 9.95,
// count: 2,
// premium: false
// }
// ];

// var total = 0;
// var descuento = 0;

// for (i = 0; i< carrito.length; i++) {
//    total += carrito[i].price * carrito[i].count;
//    descuento = total * 0.05;
//    console.log("=========");
//    console.log(carrito[i].name);
//    console.log("---");

//    if (total > 50) {
//     totalConDescuento = total - descuento;

//    }
// }

// console.log("Total del carrito (descuento aplicado): ", totalConDescuento);