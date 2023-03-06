function sum(num1, num2) {

  if (num2 == "") {
    document.getElementById("result").innerHTML = "Error";
  } else {
    var result = Number(num1) + Number(num2);
    document.getElementById("result").innerHTML = "Resultado: " + result;
    return result;
  }
}

function rest(num1, num2) {

    if (num2 == "") {
      document.getElementById("result").innerHTML = "Error";
    } else {
      var result = Number(num1) - Number(num2);
      document.getElementById("result").innerHTML = "Resultado: " + result;
      return result;
    }
  }

  function mult(num1, num2) {

    if (num2 == "") {
      document.getElementById("result").innerHTML = "Error";
    } else {
      var result = Number(num1) * Number(num2);
      document.getElementById("result").innerHTML = "Resultado: " + result;
      return result;
    }
  }

  function div(num1, num2) {

    if (num2 == "") {
      document.getElementById("result").innerHTML = "Error";
    } else {
      var result = Number(num1) / Number(num2);
      document.getElementById("result").innerHTML = "Resultado: " + result;
      return result;
    }
  }

