/*

    6 + { 8 / [3 - (9 * 2)] + (4 * 3)}
    
*/

const Stack = require('./lib/Stack')

let analisador = new Stack()

let expr = '6 + { 8 / [3 - (9 * 2)] + (4 * 3)}'

for(let i = 0; i < expr.length; i++){
    switch(expr.charAt(i)){
        case '{':
            analisador.push({pos: i, tipo: 'CH'})
            break
        case '[':
            analisador.push({pos: i, tipo: 'CO'})
            break
        case '(':
            analisador.push({pos: i, tipo: 'PA'})
            break
        case '}':
            info = analisador.pop()
            // Info não pode estar vazio e seu tipo deve ser CH
            if(info && info.tipo == 'CH'){
                console.log('Chave aberta na posição ${info.pos} e fechada na posição ${i}')
            }
            else{
                console.log('Erro: chave fechando na posição ${i}')
            }
    }
}

console.log(analisador)