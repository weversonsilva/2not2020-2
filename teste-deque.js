const Deque = require('./lib/Deque2')

let deque = new Deque()

console.log(deque)

deque.insertRear('Weverson')
deque.insertRear('Rose')
deque.insertRear('Gabriela')
deque.insertRear('Eduardo')
deque.insertRear('Nadir')

console.log(deque)

// Fura fila
deque.insertFront('Messias')
console.log(deque)

// Verificando as pontas do deque
let primeiro = deque.peekFront()
let ultimo = deque.peekRear()
console.log(deque)
console.log({primeiro, ultimo})

// Desistência do últio alocado
let desistente = deque.removeFront()
console.table(deque)
console.log({desistente})

  // Remoção do primeiro colocado
    let proximo = deque.removeFront()
    console.table(deque)
    console.log({proximo})