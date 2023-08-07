//
// Calculadora Básica em JavaScript
//

//Função para calcular valores
function calcularValores() {
	//Definindo as variáveis
	let valor1 = parseFloat(document.getElementById('txtValor1').value);
	let valor2 = parseFloat(document.getElementById('txtValor2').value);
	let operacao = document.getElementById('cbxOperacao').value;
	let resultado;

	//Verificando a operação a ser realizada
	switch (operacao) {
		case '+':
			resultado = valor1 + valor2;
			break;
		case '-':
			resultado = valor1 - valor2;
			break;
		case '*':
			resultado = valor1 * valor2;
			break;
		case '/':
			resultado = valor1 / valor2;
			break;
		default:
			break;
	}

	//Apresentando o resultado
	document.getElementById('txtResultado').innerHTML = resultado;
}

//Chamando a função para calcular os valores
calcularValores();
