/**
Nas escolas do futuro não haverá necessidade de chamadas. Ao entrar em sala, uma câmera fará o reconhecimento facial do aluno e registrará sua presença!
Imagine que, a cada aula, um array guardasse o nome de todos os alunos que estiveram presentes na aula.

Escreva uma função estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes)

Essa função deve receber dois parâmetros:
    O primeiro deve representar o nome de um aluno
    O segundo deve representar um array com o os nomes dos alunos presentes.

A sua função deve retornar true caso o nome do aluno passado como parâmetro estiver entre os presentes. false caso contrário.
 */
nomesDosPresentes = ["Matheus", "Rafael", "Ícaro", "JP", "Tales", "Liniker", "Thiago"];

function estavaPresenteNaAula(nomeDoAluno, nomesDosPresentes){
    for(i = 0; i <= nomesDosPresentes.length; i ++){
      if(nomesDosPresentes.indexOf(nomeDoAluno) != -1){
        return true;
      }
    }
    return false;
  }