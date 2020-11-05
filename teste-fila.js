const Queue = require('./lib/Queue2')

let fila = new Queue()

console.log(fila)

fila.enqueue('Weverson')
fila.enqueue('Eduardo')
fila.enqueue('Rose')
fila.enqueue('Gabi')
fila.enqueue('Messias')

console.log(fila)

let proximo = fila.dequeue()
console.log({proximo})
console.log(fila)

fila.enqueue('Nadir')
let primeiro = fila.peek()
console.log({primeiro})
console.table(fila)