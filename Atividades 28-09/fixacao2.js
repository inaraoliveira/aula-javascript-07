/* 1) Criar variáveis strings e concatenar:
a) Criar uma variável chamada palavra1 e que tenha a string com o valor “Aprendendo” dentro dela.
b) Criar mais uma variável chamada palavras com a string com o valor “strings em JavaScript”
c) Exibir no console a frase “Aprendendo strings em JavaScript”.
d) Lembrando de ter todos os espaços. */

var palavra = "Aprendendo";
var palavras = "strings em JavaScript"
var adicionarEspaco = " ";
var resultado;

resultado = palavra.concat(adicionarEspaco);
resultado = palavra.concat(palavras);

console.log(palavra);

/* 2) Criar variáveis strings:
a) Criar 3 variáveis com os nomes palavra1, palavra2, palavra3, cada uma contendo uma palavra igual ao nome da variável correspondentes (ex.: let palavra1= “palavra1”);
b) Criar mais 3 variáveis chamadas frase1, frase2, frase2. Cada uma iniciará com “Esta é a frase com a ” mais a palavra correspondente.
c) Exibir a seguinte string de múltiplas linhas:
Esta é a frase com a palavra1.
Esta é a frase com a palavra2.
Esta é a frase com a palavra3. */

var palavra1 = "palavra1";
var palavra2 = "palavra2";
var palavra3 = "palavra3";

var frase1 = "Esta é a frase com a " + palavra1;
var frase2 = "Esta é a frase com a " + palavra2;
var frase3 = "Esta é a frase com a " + palavra3;

let frase = frase1 + "\n" + frase2 + "\n" + frase3;

console.log(frase);

/* 3) Dado o array: let vetor = ["a", "b", "a", "a", "c", "b"]

a) Criar uma variável com o array ordenado de forma crescente;
b) Exibir no console.
c) Criar uma variável com o array ordenado de forma inversa.
d) Exibir no console */

let vetor = ["a", "b", "a", "a", "c", "b"];
let vetorCrescente;
let vetorDecrescente;

vetorCrescente = vetor.sort();
console.log(vetorCrescente);

vetorDecrescente = vetor.reverse();
console.log(vetorDecrescente);