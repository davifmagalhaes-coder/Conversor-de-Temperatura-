const temp = document.getElementById("temp");

const from = document.getElementById("from");

const to = document.getElementById("to");

const resultado = document.getElementById("resultado");

const orb = document.getElementById("orb");

/* EVENTOS */

temp.addEventListener("input", converter);

from.addEventListener("change", converter);

to.addEventListener("change", converter);

/* FUNÇÃO */

function converter(){

  let valor = Number(temp.value);

  let origem = from.value;

  let destino = to.value;

  if(temp.value === ""){

    resultado.innerHTML = "--";

    return;

  }

  let celsius;

/* CONVERTER PARA CELSIUS */

  if(origem === "c"){

    celsius = valor;

  }

  else if(origem === "f"){

    celsius = (valor - 32) * 5/9;

  }

  else{

    celsius = valor - 273.15;

  }

/* CELSIUS PARA DESTINO */

  let final;

  if(destino === "c"){

    final = celsius;

  }

  else if(destino === "f"){

    final = (celsius * 9/5) + 32;

  }

  else{

    final = celsius + 273.15;

  }

/* MOSTRAR RESULTADO */

  resultado.innerHTML =
  final.toFixed(1) + " °" + destino.toUpperCase();

/* MUDAR COR DO ORB */

  if(celsius <= 10){

    orb.style.background =
    "radial-gradient(circle,#00f0ff,#2563eb)";

    orb.style.boxShadow =
    "0 0 30px #00f0ff, 0 0 60px #2563eb";

  }

  else if(celsius >= 30){

    orb.style.background =
    "radial-gradient(circle,#ff6600,#ff0000)";

    orb.style.boxShadow =
    "0 0 30px #ff6600, 0 0 60px #ff0000";

  }

  else{

    orb.style.background =
    "radial-gradient(circle,#00f0ff,#8b5cf6)";

    orb.style.boxShadow =
    "0 0 30px #00f0ff, 0 0 60px #8b5cf6";

  }

}