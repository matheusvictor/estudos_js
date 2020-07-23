/*
Uma loja virtual permite a seus visitantes filtrar produtos pelo preço. Existe um array com os preços dos produtos. Um programador já criou uma função maisBaratosQue(valor, precos) que retorna um array com os preços dos produtos mais baratos que o valor passado como parâmetro. Outro programador já criou uma função maisCarosQue(valor, precos) que retorna um array com os preços mais caros que o valor passado como parâmetro. Chegou sua vez!
Crie uma função precosEntre(valorMenor, valorMaior, precos) que deve utilizar as funções maisBaratosQue e maisCarosQue para retornar os preços que estão entre o valorMenor e o valorMaior. Sua função deve receber então dois parâmetros:
    - valorMenor para representar o valor mínimo dos preços a serem listados
    - valorMaior para representar o valor máximo dos preços a serem listados
    - precos para representar um array com os preços dos produtos

Ela deve retornar um array com todos os preços entre valorMenor e valorMaio
*/

precos = [1,2,3,4,5,6,7,8,9,10];
valorMenor = 5;
valorMaior = 10;

function maisBaratosQue(valor, precos) {
    return precos.filter(p => p < valor);
 }
  
 function maisCarosQue(valor, precos){
    return precos.filter(p => p > valor);
 }
 
//as funções acima não vieram prontas e não pecisam ser modificadas
//escreva a sua função a partir desta linha:

function precosEntre(valorMenor, valorMaior, precos){ //a função vai receber como parâmetro os valores 5, 10 e o array de precos
    // o novo array precosCarosArray irá armazenar os valores que sejam 
    //mais caros que o menor valor (5) dentre o array precos
    precosCarosArray = maisCarosQue(valorMenor, precos);
    // o novo array precosBaratosArray guardará os valores menores que 10
    precosBaratosArray = maisBaratosQue(valorMaior, precos);
    precosEntreArray = [];
    // criamos esse array vazio para armazenar algo mais à frente, caso a condição seja atendida
    //do contrário, se retornarmos o array vazio, significa que não houveram valores a serem guardado
    
    for(i = 0; i < precosCarosArray.length; i ++) {
        //varre o vetor precosCarosArray para compará-lo com os valores do vetor precosBaratosArray
        for(j = 0; j < precosBaratosArray.length; j++) {
            //varre o vetor precosBaratos para comparar cada valor com cada índice do vetor precosBaratosArray
            //ex.: quando a posição i do vetor precosCarosArray for igual a 0
            //o valor será comparado com cada uma das posições de j. Em seguida, quando o valor de i =1
            //o valor daquele índice também será comparado com cada posição de j.
            console.log(i, j, precosCarosArray[i], precosBaratosArray[j], precosCarosArray[i] == precosBaratosArray[j]);
            // o console.log não é necessário, mas podemos utilizar para nos certificar quais são os valores que estão sendo obtidos a cada execução do laço
            //neste caso, o console.log está imprimindo o índice i e j, qual é o valor obtido em precosBaratosArray na atual posição de i,
            //qual é o valor obtido em precosCarosArray na atual posição de j
            //e imprimirá ainda true ou false na comparação dos valores na posição i e na posição j
            if(precosCarosArray[i] == precosBaratosArray[j]) {
                precosEntreArray.push(precosCarosArray[i]);
                //se o valor obtido em precosCarosArray na posição atual de i for igual ao valor obtido
                //em precosBaratosArray na posição atual de j, aquele valor é comum a ambos os vetores e, por isso
                //será adicionado ao vetor precosEntreArry
            }
        }
    }

    return precosEntreArray; //depois de percorrer e comprar os vetores precosBaratosArray e precosCarosArray
    //a função retornará um vetor com os valores iguais. Caso não haja, retornará um vetor vazio
 }