/** Programar uma função filme que recebe três arrays com os nomes de personagens, filmes e ano de estréia no cinema.
 * A função deve receber também um valor de id escolhido pelo usuário com intervalo de 1 até o tamanho de um dos arrays fornecidos e retornar uma frase com o seguinte modelo:
 * 
 * "personagem é um personagem do filme filme que estreou no cinema em lançamento."
 * "Se o valor de id for inválido, a função deve retornar a frase "Essa não é uma opção válida."


Exemplo:
var personagens = ["Hermione", "Trinity", "Leia"]
var filmes = ["Harry Potter", "Matrix", "Star wars"]
var lancamentos = [2001, 1999, 1977]
var id = 3

filme(personagens, filmes, lancamentos, id)  
// retorna a string "Leia é um personagem do filme Star wars que estreou no cinema em 1977."
*/

var personagensArray = ["Hermione", "Trinity", "Leia"];
var filmesArray = ["Harry Potter", "Matrix", "Star wars"];
var lancamentosArray = [2001, 1999, 1977];
var id = 2;

 function filme(personagens, filmes, lancamentos, id){
   //o id passado não pode ser maior que o tamanho do array
   if(id <= personagensArray.length){
     //varrendo o arrar personagens
     for(i = 0; i < personagensArray.length; i++){
       //verificando se o índice do array na posição ir for igual ao id passado
       //ex.: se i = 2, personagens.indexOf(personagens[i]) deve retornar Leia como personagem
       if(personagensArray.indexOf(personagensArray[i]) == id){
         //imprimindo as informações na posição que seja igual ao id
         //p.s.: acho que aqui tbm tem erro, pq não rodei os outros vetores 
         console.log(personagensArray[i] + " é um personagem do filme " + filmesArray[i] + " que estreou no cinema em " + lancamentosArray[i] + ".");
       }
     }
   } else{ //caso o id passado como parâmetro seja maior que o tamanho do vetor, o laço vai direto para o else
     console.log("Essa não é uma opção válida");
   }
 }