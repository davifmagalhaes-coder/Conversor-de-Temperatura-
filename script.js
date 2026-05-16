function convertTemperature(){

  const temp = parseFloat(
    document.getElementById("temperature").value
  );

  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;

  const resultText = document.getElementById("resultText");

  let celsius;

  // Converter para Celsius primeiro

  if(from === "C"){
    celsius = temp;
  }
  else if(from === "F"){
    celsius = (temp - 32) * 5/9;
  }
  else{
    celsius = temp - 273.15;
  }

  let result;

  // Converter do Celsius para destino

  if(to === "C"){
    result = celsius;
  }
  else if(to === "F"){
    result = (celsius * 9/5) + 32;
  }
  else{
    result = celsius + 273.15;
  }

  resultText.innerHTML =
    `${result.toFixed(2)} °${to}`;

  updateTheme(celsius);
}

function updateTheme(temp){

  const body = document.body;
  const glow = document.querySelector(".background-glow");
  const cube = document.querySelector(".cube");

  // FRIO

  if(temp <= 10){

    body.style.background =
      "linear-gradient(135deg,#020617,#0ea5e9)";

    glow.style.background =
      "#38bdf8";

    cube.style.boxShadow =
      "0 0 40px rgba(56,189,248,0.9)";

    cube.style.transform =
      "scale(1.1) rotateX(15deg)";
  }

  // AMENO

  else if(temp > 10 && temp < 30){

    body.style.background =
      "linear-gradient(135deg,#111827,#7c3aed)";

    glow.style.background =
      "#a855f7";

    cube.style.boxShadow =
      "0 0 40px rgba(168,85,247,0.9)";

    cube.style.transform =
      "scale(1.15) rotateY(15deg)";
  }

  // QUENTE

  else{

    body.style.background =
      "linear-gradient(135deg,#3b0764,#ff5e00)";

    glow.style.background =
      "#ff5e00";

    cube.style.boxShadow =
      "0 0 50px rgba(255,94,0,1)";

    cube.style.transform =
      "scale(1.2) rotateZ(10deg)";
  }
}