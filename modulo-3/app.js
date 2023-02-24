const product = { count: 3, price: 12.55, type: "ropa" };

function getVat(product) {
  var iva = 0;

  switch (product.type) {
    case "libro":
      iva = product.count * 0.04;
      break;
    case "alimentacion":
      iva = product.count * 0.1;
      break;
    default:
      iva = product.count * 0.21;
      break;
  }
  return iva;
}

function getSubtotal(product) {
  return product.count > 0 ? product.count * product.price : 0;
}

function getTotalVat(product) {
  return product.count > 0 ? product.count * getVat(product) : 0;
}

function printProductPrice(product) {
  const subtotal = getSubtotal(product);
  const vat = getTotalVat(product);
  const total = subtotal + vat;

  console.log("Subtotal:", subtotal + "€");
  console.log("IVA:", vat + "€");
  console.log("Total:", total + "€");
}
printProductPrice(product);
