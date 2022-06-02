//capturar o evento de submit do formulário
const form = document.querySelector("#formulario");

// adicioando um evento do tipo submit, (e de evento) -- evento para parar o envio do formulário
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector("#peso");
    const inputAltura = e.target.querySelector("#altura");

    const peso = Number(inputPeso.value);
    const altura1 = Number(inputAltura.value);
    const altura = altura1 / 100;

    if(!peso) {  
        setResultado('Peso Invalido', false);
        return; //se o peso for invalido, um NaN, ele para a função aqui
    } 
    if(!altura) {
        setResultado('Altura Invalida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const msg = `Seu IMC é: ${imc} (${nivelImc}).`


    setResultado(msg, true);
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']

    if (imc >= 39.9) {
        return nivel[5];
    } 
    if (imc >= 34.9) {
        return nivel[4];
    }
    if (imc >= 29.9) {
        return nivel[3];
    }
    if (imc >= 24.9) {
        return nivel[2];
    }
    if (imc >= 18.5) {
        return nivel[1];
    }
    if (imc < 18.5) {
        return nivel[0];
    } 
};

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
};


function criaP() { // essa função cria somente a tag p html
    const p = document.createElement('p'); // cria a tag p - paragrafo
    return p;
}

//resultado exibido
function setResultado (msg, isValid) { //esse parametro serve para quando passar algum texto para o setResultado ele exiba
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';  // aqui zera o resultado
    
    

    const p = criaP();

    if(isValid) {
        p.classList.add('paragrafo-resultado'); // se o resultado for valido cria essa class
    } else {
        p.classList.add('bad') // se o resultado nao for valido cria essa class
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
};



