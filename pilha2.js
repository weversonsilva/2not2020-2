const Stack = require('./lib/Stack2')

let pilha = new Stack()

console.log(pilha)  

pilha.push(9)
pilha.push(-8)
pilha.push(0)
pilha.push(4)

console.log(pilha)
console.log('Último elemento:', pilha.peek())
console.log('Tamanho: ', pilha.size())

let x = pilha.pop()
console.log('x: ', x)
console.log('Último elemento:', pilha.peek())
console.log('Tamanho: ', pilha.size())

