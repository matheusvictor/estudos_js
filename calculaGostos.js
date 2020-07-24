/** Em um site sobre cinema, os visitantes cadastrados podem dar notas de 0 a 5 para um filme que ele tenha assistido. Cada filme tem um grande array de notas atribuídas pelos visitantes. Contudo, além de dar notas para os filmes,
 * os visitantes querem ver o que as outras pessoas acharam do filme! É aí que você entra com seu código:
 * 
 * Escreva uma função calculaGostos(notas).
 * Essa função deve ser escrita para receber somente um parâmetro: um array de notas. Ela deve retornar também um array com três elementos:
 *         O primeiro, com a quantidade de notas iguais a 0 ou 1. Seriam os que não gostaram do filme
 *         O segundo, com a quantidade de notas iguais a 2 ou 3. Seriam os que acharam o filme mediano
 *         O terceiro, com a quantidade de notas iguais a 4 ou 5. Seriam os que gostaram do filme.
 */

notas = [0, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 5, 5, 5, 4, 3, 2, 1, 2, 0];
avaliacaoArray = [];
nGostaram = 0;
mediano = 0;
gostaram = 0;

function calculaGostos(notas){

    for(i = 0; i < notas.length; i ++){
      if(notas[i] >= 0 && notas[i] <= 1){
        nGostaram ++;
      } else if(notas[i] >= 2 && notas[i] <= 3){
        mediano ++;
      } else{
        gostaram ++;
      }
    }
  
  avaliacaoArray.push(nGostaram, mediano, gostaram);
  return avaliacaoArray;
}