/**
 * Uma fábrica de biscoitos da sorte precisa de um sistema.
 * O sistema deve gerar seis dezenas aleatórias para serem impressas.
 * Sabe como é: Palpites para seus clientes jogarem na mega sena!
 * O seu trabalho é escrever uma função gerarDezenas(). Essa função não recebe nenhum parâmetro.
 * Tudo que ela deve fazer é gerar e retornar um array contendo seis números aleatórios entre 1 e 60.
 */
numerosGerados = [];

 function gerarDezenas(){
     for(i = 0; i < 6; i ++){
        numeroGerado = Math.round(Math.random() * 60); //retorma um número aleatório entre 0 e 60, convertido em inteiro
        numerosGerados.push(numeroGerado)
     }
    return numerosGerados; 
 }