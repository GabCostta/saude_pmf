function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultadoIMC = document.getElementById('resultadoIMC');

    if (!altura || !peso) {
        resultadoIMC.textContent = 'Por favor, insira valores válidos para altura e peso.';
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    let categoria = '';
    let imagem = '';

    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
        imagem = 'https://via.placeholder.com/100?text=Abaixo';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
        imagem = 'https://via.placeholder.com/100?text=Normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
        imagem = 'https://via.placeholder.com/100?text=Sobrepeso';
    } else {
        categoria = 'Obesidade';
        imagem = 'https://via.placeholder.com/100?text=Obesidade';
    }

    resultadoIMC.innerHTML = `Seu IMC é ${imc} (${categoria}).<br><img src="${imagem}" alt="${categoria}">`;
}