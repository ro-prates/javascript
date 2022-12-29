//console.log('está funcionando!'); // imprime no console do navegador

let idade = 18; // declara uma variável
console.log(idade); // imprime no console do navegador

let altura = 1.80; // declara uma variável
console.log(altura); // imprime no console do navegador

const nome = 'João'; // declara uma constante (não pode ser alterada)
let valor = 7.5; // declara uma variável do tipo float
let estaAprovado = true; // declara uma variável do tipo boolean
let sobrenome = undefined; // declara uma variável do tipo undefined
let corSelecionada = null; // declara uma variável do tipo null (ideal para resetar)
let quantidade = 10; // declara uma variável do tipo int

console.log(typeof(nome)); // retorna o tipo da variável
console.log(typeof(valor)); // retorna o tipo da variável

let pessoa = { // declara um objeto
    nome: 'João',
    valor: 7.5,
    estaAprovado: true,
    sobrenome: undefined,
    corSelecionada: null,
    quantidade: 10
}

console.log(pessoa); // imprime no console do navegador
console.log(typeof(pessoa)); // imprime o tipo objeto no console do navegador

let familia = [1, 2, 3, 4, 5]; // declara um array
console.log(familia);

console.log(familia.length); //tamanho do array

corSelecionada = 'azul'; // altera o valor da variável

function resetaCor(cor) { // declara uma função
    corSelecionada = cor;

}

console.log(corSelecionada); 
resetaCor('vermelho'); // altera o valor da variável
console.log(corSelecionada);

function dizerNome() { // função que não recebe parâmetro
    console.log('Maria');
}

dizerNome();

function multiplicarPorDois(valor) { 
    return valor * 2;
}

let resultado = multiplicarPorDois(78);
console.log(resultado);

let salario = 5;

console.log(salario + salario)
console.log(salario - salario)
console.log(salario * salario)
console.log(salario / salario)
console.log(salario ** salario)

let idadeValor = 18;
console.log(idadeValor++)
console.log(idadeValor) //só incrementa depois da impressão
console.log(++idadeValor) //incrementa antes da impressão

let valorTecladoGamer = 100;
console.log(valorTecladoGamer += valorTecladoGamer) //soma o valor e atribui o resultado

// igualdade estrita
console.log(1 === 1); // true
console.log('1' === 1); // false, pois o tipo é diferente

// igualdade solta
console.log(1 == 1); // true
console.log('1' == 1); // true, pois o valor é igual

// operador ternário
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

// operador lógico AND (&&) OR (||) NOT (!) 
