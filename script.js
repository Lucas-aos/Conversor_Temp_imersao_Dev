// função para converter temperaturas
function newInp() {
  var f = "Fahrenheit";
  var k = "Kelvin";
  var c = "Celsius";

  var tempOriginal = document.getElementById("temp1").value;
  var tempDesejado = document.getElementById("temp2").value;
  var valorOriginal = document.getElementById("val1").value;
  var tempFK = ((valorOriginal - 32) * 5) / 9 + 273.15; // Fahrenheit para Kelvin = (F − 32) × 5/9 + 273,15
  var tempKF = ((valorOriginal - 273.15) * 9) / 5 + 32; //Kelvin para Fahrenheit = (K − 273,15) × 9/5 + 32
  var tempFC = (valorOriginal - 32) / 1.8; //Fahrenheit para Celsius = F - 32 /1,8
  var tempCF = 1.88 * valorOriginal + 32; //Celsius para Fahrenheit = 1,88 * Celius + 32
  var tempKC = valorOriginal - 273; //Kelvin para Celsius = Substrair 273
  var tempCK = valorOriginal + 273; //Celsius para Kelvin = Somar 273

  if (valorOriginal == "" || tempOriginal == tempDesejado) {
    alert("Preencha corretamente");
  } else if (tempOriginal == f && tempDesejado == k) {
    document.getElementById("resultado").textContent =
      "A conversão de " +
      valorOriginal +
      "° " +
      f +
      " corresponde a " +
      tempFK.toFixed(2) +
      "° " +
      k +
      ".";
  } else if (tempOriginal == k && tempDesejado == f) {
    document.getElementById("resultado").textContent =
      "A conversão de " +
      valorOriginal +
      "° " +
      k +
      " corresponde a " +
      tempKF.toFixed(2) +
      "° " +
      f +
      ".";
  } else if (tempOriginal == f && tempDesejado == c) {
    document.getElementById("resultado").textContent =
      "A conversão de " +
      valorOriginal +
      "° " +
      f +
      " corresponde a " +
      tempFC.toFixed(2) +
      "° " +
      c +
      ".";
  } else if (tempOriginal == c && tempDesejado == f) {
    document.getElementById("resultado").textContent =
      "A conversão de " +
      valorOriginal +
      "° " +
      c +
      " corresponde a " +
      tempCF.toFixed(2) +
      "° " +
      f +
      ".";
  } else if (tempOriginal == k && tempDesejado == c) {
    document.getElementById("resultado").textContent =
      "A conversão de " +
      valorOriginal +
      "° " +
      k +
      " corresponde a " +
      tempKC.toFixed(2) +
      "° " +
      c +
      ".";
  } else if (tempOriginal == c && tempDesejado == k) {
    document.getElementById("resultado").textContent =
      "A conversão de " +
      valorOriginal +
      "° " +
      c +
      " corresponde a " +
      tempKC.toFixed(2) +
      "° " +
      k +
      ".";
  }
}