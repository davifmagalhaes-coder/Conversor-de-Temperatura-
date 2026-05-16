// Seleção dos elementos do DOM
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const body = document.body;

// Função para atualizar as cores do fundo com base na temperatura em Celsius
function atualizarCorFundo(celsius) {
    if (celsius <= 0) {
        // Frio Extremo: Azul escuro / Roxo
        body.style.background = "linear-gradient(135deg, #1d2b64, #f8cdda)";
    } else if (celsius > 0 && celsius <= 18) {
        // Frio/Agradável: Azul claro / Ciano
        body.style.background = "linear-gradient(135deg, #2b5876, #4e4376)";
    } else if (celsius > 18 && celsius <= 30) {
        // Quente moderado: Laranja / Verde amarelado
        body.style.background = "linear-gradient(135deg, #11998e, #38ef7d)";
    } else {
        // Muito Quente: Vermelho / Laranja Vivo
        body.style.background = "linear-gradient(135deg, #f12711, #f5af19)";
    }
}

// Evento para cálculo a partir do Celsius
celsiusInput.addEventListener('input', () => {
    const c = parseFloat(celsiusInput.value);
    if (!isNaN(c)) {
        fahrenheitInput.value = ((c * 9/5) + 32).toFixed(2);
        kelvinInput.value = (c + 273.15).toFixed(2);
        atualizarCorFundo(c);
    } else {
        esvaziarInputs();
    }
});

// Evento para cálculo a partir do Fahrenheit
fahrenheitInput.addEventListener('input', () => {
    const f = parseFloat(fahrenheitInput.value);
    if (!isNaN(f)) {
        const c = (f - 32) * 5/9;
        celsiusInput.value = c.toFixed(2);
        kelvinInput.value = (c + 273.15).toFixed(2);
        atualizarCorFundo(c);
    } else {
        esvaziarInputs();
    }
});

// Evento para cálculo a partir do Kelvin
kelvinInput.addEventListener('input', () => {
    const k = parseFloat(kelvinInput.value);
    if (!isNaN(k)) {
        const c = k - 273.15;
        celsiusInput.value = c.toFixed(2);
        fahrenheitInput.value = ((c * 9/5) + 32).toFixed(2);
        atualizarCorFundo(c);
    } else {
        esvaziarInputs();
    }
});

// Limpa os campos caso o usuário apague tudo
function esvaziarInputs() {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
    kelvinInput.value = '';
}
