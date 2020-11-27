const BinarySearchTree = require('./lib/BinarySearchTree')

let arvore = new BinarySearchTree
console.log(arvore)

arvore.insert(33)
console.log(arvore)

arvore.insert(59)
console.log(arvore)

arvore.insert(10)
console.log(arvore)

arvore.insert(41)
console.log(arvore)

arvore.insert(6)
arvore.insert(70)
arvore.insert(27)
arvore.insert(8)
arvore.insert(64)
console.log(arvore)

//arvore.inOrderTraversal(x => console.log(x)) // Em ordem

let vet = []
arvore.inOrderTraversal(d => vet.push(d))
console.log('Em-ordem:', vet)

vet = []
arvore.preOrderTraversal(d => vet.push(d))
console.log('Pré-ordem:', vet)

vet = []
arvore.postOrderTraversal(d => vet.push(d))
console.log('Pós-ordem:', vet)

// Menor valor da árvore
console.log('Mínimo: ', arvore.min())

// Maior valor da árvore
console.log('Máximo: ', arvore.max())

console.log('Existe 41?', arvore.search(41))
console.log('Existe 8?', arvore.search(8))
console.log('Existe 59?', arvore.search(59))
console.log('Existe 20?', arvore.search(20))
console.log('Existe 51?', arvore.search(51))

arvore.insert(35)
arvore.insert(39)
arvore.insert(34)

vet = []
arvore.inOrderTraversal(d => vet.push(d))
console.log('Em-ordem:', vet)

// Caso 1: Exclusão de um nodo folha (grau 0)
arvore.remove(39)
vet = []
arvore.inOrderTraversal(d => vet.push(d))
console.log('Em-ordem:', vet)

// Caso 2a: Exclusão de um nod grau 1 com subarvore a esquerda
arvore.remove(70)
vet = []
arvore.inOrderTraversal(d => vet.push(d))
console.log('Em-ordem:', vet)

// Caso 2b: Exclusão de um nodo grau 1 com subarvore a direita
arvore.remove(6)
vet = []
arvore.inOrderTraversal(d => vet.push(d))
console.log('Em-ordem:', vet)

// Caso 3: Exclusão de um nodo grau 2
arvore.remove(59)
vet = []
arvore.inOrderTraversal(d => vet.push(d))
console.log('Em-ordem:', vet)



