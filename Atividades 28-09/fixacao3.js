/* 1) Para a string texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo.", exibir no console:
a) O número de caracteres da string.
b) A string com todas suas letras em maiúsculo.
c) O número de vogais da string.
d) A string com todas suas letras em minúsculo.
e) Fazer a busca pela palavra humanidade e exibir o index onde ela está. */

var texto = "Todos pensam em mudar a humanidade e ninguém pensa em mudar a si mesmo."

/* a) */ 
console.log(texto.length);

/* b) */ 
console.log(texto.toUpperCase());

/* c) */
var vogais = {vogalA: "a", vogalE: "e", vogalI: "i", vogalO: "o", vogalU: "u", vogalÉ: "é"}
var contagem = 0;

for(i = 0; i < texto.length; i++){
  if(texto[i] == vogais.vogalA || texto[i] == vogais.vogalE || texto[i] == vogais.vogalI || texto[i] == vogais.vogalO || texto[i] == vogais.vogalU || texto[i] == vogais.vogalÉ){
    contagem++
    console.log(contagem)
 }
}
/* d) */
console.log(texto.toLowerCase());
console.log(texto.indexOf("humanidade"))

/* 2) Percorrer os números pares menores que 100.
a) Adicionar em um array.
b) Transformar o array em string.
c) Exibir no console. */

var numerosPares = [];
var numerosParesString;

for(i = 1; i < 100; i++){
  if(i % 2 == 0){
    numerosPares.push(i);
    numerosParesString = numerosPares.toString();
    console.log(numerosParesString);
 }
}
