let pilha = []

let texto = 'SER OU NAO SER EIS A QUESTAO'

for(let i = 0; i < texto.length; i++){
// Inserção na pilha deve sempre ser feita ao FINAL
pilha.push(texto.charAt(i))
}

let inverso = ''
while(pilha.length > 0) {
    // Retiradas na pilha devem ser feitas também no Final
    inverso += pilha.pop()
}

console.log(pilha)

console.log(inverso)
// Função 
