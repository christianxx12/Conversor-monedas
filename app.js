var monto = document.getElementById("monto");
var button = document.getElementById("convert-btn");
var exchange = document.getElementById("exchange");

button.addEventListener("click", convertir);

function convertir() {
  var resultado = monto.value * 0.0026;
  exchange.innerHTML = `$${resultado}`;
}
