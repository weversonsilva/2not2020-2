/*

   DADOS PARA O EXERCÍCIO

   nome;sigla;area;populacao
   Sergipe;SE;21915.08;2278308
   Alagoas;AL;27848.14;3322820
   Rio Grande do Norte;RN;52811.05;3479010
   Paraíba;PB;56469.78;3996496
   Pernambuco;PE;98148.32;9496294
   Ceará;CE;148920.47;9075649
   Piauí;PI;251577.74;3264531
   Maranhão;MA;331937.45;7035055
   Bahia;BA;564733.18;14812617

*/

let estadosNe = []

let estado1 = {
   nome: 'Sergipe',
   sigla: 'SE',
   area: 21915.08,
   populacao: 2278308
}

let estado2 = {
    nome: 'Alagoas',
    sigla: 'AL',
    area: 27848.14,
    populacao: 3322820
}

let estado3 = {
    nome: 'Rio Grande do Norte',
    sigla: 'RN',
    area: 56469.78,
    populacao: 3996496
}

let estado4 = {
    nome: 'Paraiba',
    sigla: 'PB',
    area: 52811.05,
    populacao: 3479010
}

let estado5 = {
    nome: 'Pernambuco',
    sigla: 'PE',
    area: 98148.32,
    populacao: 9496294
}

let estado6 = {
    nome: 'Ceará',
    sigla: 'CE',
    area: 148920.47,
    populacao: 9075649
}

let estado7 = {
    nome: 'Piauí',
    sigla: 'PI',
    area: 251577.74,
    populacao: 3264531
}

let estado8 = {
    nome: 'Maranhão',
    sigla: 'MA',
    area: 331937.45,
    populacao: 7035055
}

let estado9 = {
    nome: 'Bahia',
    sigla: 'BA',
    area: 564733.18,
    populacao: 14812617
}

estadosNe.push(estado1, estado2, estado3, estado4, estado5, estado6, estado7, estado8, estado9)

console.log(estadosNe)



/*
   1) Crie objetos para os demais Estados, segundo o modelo acima, e acrescente-os
      ao vetor estadosNe usando push().
*/

/*
   2) Escreva uma arrow function que receba dois parâmetros, área e população, e
      calcule a densidade demográfica retornando o resultado da divisão da
      segunda pela primeira. 
*/


let densidade1 = (populacao, area) => (populacao / area)
    console.log(densidade1(estado1.area, estado1.populacao))

let densidade2 = (populacao, area) => (populacao / area)
    console.log(densidade2(estado2.area, estado2.populacao))

let densidade3 = (populacao, area) => (populacao / area)
    console.log(densidade3(estado3.area, estado3.populacao))  
    
let densidade4 = (populacao, area) => (populacao / area)
    console.log(densidade4(estado4.area, estado4.populacao))    

let densidade5 = (populacao, area) => (populacao / area)
    console.log(densidade5(estado5.area, estado5.populacao))   
    
let densidade6 = (populacao, area) => (populacao / area)
    console.log(densidade6(estado6.area, estado6.populacao))   
    
let densidade7 = (populacao, area) => (populacao / area)
    console.log(densidade7(estado7.area, estado7.populacao))   
    
let densidade8 = (populacao, area) => (populacao / area)
    console.log(densidade8(estado8.area, estado8.populacao))   
    
let densidade9 = (populacao, area) => (populacao / area)
    console.log(densidade9(estado9.area, estado9.populacao))    

/*
   3) Percorra o vetor estadosNe usando um for tradicional. Para cada estado,
      chame a arrow function criada em 2) e efetue o cálculo correspondente.
      Com o resultado do cálculo, crie uma propriedade chamada 'densidade
      demográfica' para cada objeto representando um Estado.

      Durante este mesmo loop, elimine a propriedade 'sigla' dos objetos.

*/
estado1['densidade demografica'] = densidade1
estado2['densidade demografica'] = densidade2
estado3['densidade demografica'] = densidade3
estado4['densidade demografica'] = densidade4
estado5['densidade demografica'] = densidade5
estado6['densidade demografica'] = densidade6
estado7['densidade demografica'] = densidade7
estado8['densidade demografica'] = densidade8
estado9['densidade demografica'] = densidade9

for(let i = 0; i < estadosNe.length; i++) {
    estado1['densidade demográfica'] = densidade1 = (populacao, area) => (populacao / area)
    console.log(densidade9(estado1.area, estado1.populacao))  
}    

console.log(estadosNe)


/* 4) Escreva uma arrow function que receba um objeto. Na função, use for..in
      para extrair as propriedades e seus valores e exibi-los com console.log().

*/

/* 5) Percorra o vetor estadosNe usando for..of. Para cada objeto no vetor,
      invoque a função escrita em 4) para exibi-lo.

/*
   6)
      a) Declare um vetor vazio.
      b) Insira no vetor criado no item a) apenas o nome de cada Estado, conforme
         os dados no topo deste arquivo, um de cada vez. Faça as inserções de 
         modo que o vetor final esteja em ordem alfabética. No caso, o primeiro 
         Estado (Sergipe), pode ser inserido com push(), mas o segundo (Alagoas)
         deve ser inserido com unshift(), para manter a ordem alfabética. 
         O terceiro Estado (Rio Grande do Norte) deve ser inserido entre os dois 
         já existentes, e assim por diante.

*/