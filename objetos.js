//Declaração de objeto vazio
let pessoa1 = {}            // Método moderno
let pessoa2 = new Object()  // Método tradicional

// Declarando e inicializando um objeto já com propriedades
// Propriedade -> atributo + valor
let pessoa3 = {
    nome: 'Weverson Silva',
    naturalidade: 'Franca',
    "data de nascimento": '1977-28-03',
    estudante_fatec: true
}

// Acessando uma propriedade de objeto
// Atributo é uma única palavra
console.log(pessoa3.nome)
console.log(pessoa3.estudante_fatec)

//Acessando uma propriedade composta por várias palavras
// Sintaxe dos colchetes
console.log(pessoa3["data de nascimento"])

let atrib = 'naturalidade'
console.log(pessoa3[atrib])

// Criando novas propriedades em um objeto
// Basta atribuir valor a um nome de atributo
pessoa3.nacionalidade = 'portuguesa'            // Única palavra
pessoa3['registro de estrangeiro'] = 123456789  // Várias palavras

console.log(pessoa3)

// Eliminando uma propriedade
delete pessoa3.estudante_fatec

console.log('-----------------------')

console.log(pessoa3)

console.log('-----------------------')

// Como percorrer todas as propriedades de um objeto: for in
for(let prop in pessoa3) {
    console.log(prop)
}

// Listando atributo e valor de um objeto usando for .. in
for(let atrib in pessoa3) {
    //console.log('Atributo: ' + atrib + '; valor: ' + pessoa3[atrib])
    console.log(`Atributo: ${atrib}; valor: ${pessoa3[atrib]}`)
}
