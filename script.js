function calcularIMC() { 
    const peso = parseFloat(document.getElementById('peso').value);
    let altura = document.getElementById('altura').value.replace(',', '.');
    const idade = parseInt(document.getElementById('idade').value);

    // Verifica se a altura está em metros ou em centímetros
    if (!isNaN(altura) && parseFloat(altura) > 10) {
        altura = parseFloat(altura) / 100; // Converte para metros, caso seja em centímetros
    } else {
        altura = parseFloat(altura);
    }

    if (!peso || !altura || !idade || altura <= 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const imc = calcularIndiceMassaCorporal(peso, altura);
    const { classificacao, imagem } = obterClassificacaoEImagem(imc, idade);

    exibirResultadoIMC(imc, classificacao, imagem);
}

function calcularIndiceMassaCorporal(peso, altura) {
    return peso / (altura * altura);
}

function obterClassificacaoEImagem(imc, idade) {
    if (idade >= 60) {
        if (imc <= 22) {
            return { classificacao: 'Baixo peso', imagem: './assets/img/imc01.png' };
        } else if (imc > 22 && imc < 27) {
            return { classificacao: 'Adequado ou eutrófico', imagem: './assets/img/imc03.png' };
        } else {
            return { classificacao: 'Sobrepeso', imagem: './assets/img/imc05.png' };
        }
    } else {
        if (imc < 18.5) {
            return { classificacao: 'Baixo peso', imagem: './assets/img/imc01.png' };
        } else if (imc >= 18.5 && imc <= 24.9) {
            return { classificacao: 'Peso normal', imagem: './assets/img/imc02.png' };
        } else if (imc >= 25 && imc <= 29.9) {
            return { classificacao: 'Excesso de peso', imagem: './assets/img/imc03.png' };
        } else if (imc >= 30 && imc <= 34.9) {
            return { classificacao: 'Obesidade de Classe 1', imagem: './assets/img/imc04.png' };
        } else if (imc >= 35 && imc <= 39.9) {
            return { classificacao: 'Obesidade de Classe 2', imagem: './assets/img/imc05.png' };
        }
    }
}

function exibirResultadoIMC(imc, classificacao, imagem) {
    const resultDiv = document.getElementById('resultadoIMC');
    resultDiv.innerHTML = `
        <p>Seu IMC é <strong>${imc.toFixed(1)}</strong>. Classificação: <strong>${classificacao}</strong></p>
        <img src="${imagem}" alt="${classificacao}">
    `;
}
