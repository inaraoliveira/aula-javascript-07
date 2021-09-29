/* 1) Criar um array com os nomes de 7 cidades de Pernambuco:
a) Ordenar seus elementos na ordem invertida.
b) Exibir no console.
c) Adicionar duas cidades usando splice().
d) Exibir no console. */

let cidadesDePernambuco = ["Caruaru", "Recife", "Olinda", "Petrolina", "Garanhuns", "Sirinhaém", "Camaragibe"];

cidadesDePernambuco.reverse();
console.log(cidadesDePernambuco);

cidadesDePernambuco.splice(7, 2, "Tamandaré", "Floresta")
console.log(cidadesDePernambuco);

/* 2) Criar um array com os valores 1,4,8,6,9,2,6,7,3,0,5
a) Obter qual o index onde está o elemento 9.
b) Exibir no console qual a posição no array em que o elemento 9 está. */

let numeros = [1,4,8,6,9,2,6,7,3,0,5];
let posicaoDoElemento = numeros.indexOf(9);

console.log("O elemento 9 está na posição " + posicaoDoElemento);