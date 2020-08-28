// Expressão de função "tradicional"

// Carcacterística desta função
// - Um único argumento -> n
// - Seu corpo tem apenas uma linha de código com return
let quadrado = function(n) {
    return n * n
}

console.log(quadrado(6))

console.log('-----------------------------------------------')

// A função tradicional acima pode ser transformada em arrow function
// - Desaparece a palavra function
// - O argumento não precisa de parênteses
// - Após o argumento há a flecha (arrow) =>
// - As chaves e a palavra return são omitidos
let quadrado2 = n => n * n

console.log(quadrado(6))
console.log(quadrado2(6))

// Situação alternativa 1: Função sem argumento
// Retorna um número aleatorio entre 0 e 99 
let aleatorio = function() {
    //Math.random() -> gera um número aleatório entre 0 e 1 (fracionário)
    //Math.floor() -> "corta fora" as casas decimais de um número
    return Math.floor(Math.random() *100)
}

console.log('---------------------------')
console.log(aleatorio())

// Arrow function com 0 argumento
// - Os parênteses vazios marcam o lugar do argumento (obrigatório)
let aleatorio2 = () => Math.floor(Math.random() * 1000)
console.log(aleatorio2())

// Situação alternativa 2: Função com 1+ argumentos

// Função tradicional com 1+ argumentos
let imc = function(peso,altura) {
    return peso / (altura ** 2)
}
console.log(imc(78, 1.69))

// Arrow function com 1+ argumento
let imc2 = (peso, altura) => peso / (altura ** 2)

console.log(imc2(78, 1.69))

// Conclusão: os parênteses só podem ser omitidos da lista de argumentos 
// de uma arrow function quando há UM e APENAS UM argumento.

// Situação alternativa 3: Funções com mais de uma linha no corpo

//Função tradicional
let fatorial = function(n) {
    let res = 1
    for(let i = n; i > 1; i--) {
        res *= i
    }
    return res
}
console.log(fatorial(5))

// Arrow function com corpo maior que uma linha
// - Não há como fazer otimizações quanto ao corpo da função

let fatorial2 = n => {
    let res = 1
    for(let i = n; i > 1; i--) {
        res *= i
    }
    return res
}
console.log(fatorial2(5))