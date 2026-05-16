function converter(){

  let temperatura =
   Number(document.getElementById("temperatura").value);

  let tipo =
   document.getElementById("tipo").value;

  let resultado =
   document.getElementById("resultado");

  if(isNaN(temperatura)){

    resultado.innerHTML =
      "Digite uma temperatura válida!";

    return;
  }

  let valor;

  switch(tipo){

    case "c-f":

      valor = (temperatura * 9/5) + 32;

      resultado.innerHTML =
       `${temperatura}°C = ${valor.toFixed(2)}°F`;

    break;

    case "f-c":

      valor = (temperatura - 32) * 5/9;

      resultado.innerHTML =
       `${temperatura}°F = ${valor.toFixed(2)}°C`;

    break;

    case "c-k":

      valor = temperatura + 273.15;

      resultado.innerHTML =
       `${temperatura}°C = ${valor.toFixed(2)}K`;

    break;

    case "k-c":

      valor = temperatura - 273.15;

      resultado.innerHTML =
       `${temperatura}K = ${valor.toFixed(2)}°C`;

    break;
  }
}

/* ENTER */

document
.getElementById("temperatura")
.addEventListener("keypress", function(e){

  if(e.key === "Enter"){
    converter();
  }
})