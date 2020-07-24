/**
 * Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros e
o segundo elemento é o maior dos parâmetros
 */

numerosGerados = [];

//função para gerar 5 números aleatórios entre 0 e 60
function gerarNumeros(){
    for(i = 0; i < 5; i ++){
       numeroGerado = Math.round(Math.random() * 60); //retorma um número aleatório entre 0 e 60, convertido em inteiro
       numerosGerados.push(numeroGerado)
    }
   return numerosGerados; 
}

numeros = gerarNumeros();

function maxMin(numeros){
    console.log(Math.max(numeros))
}