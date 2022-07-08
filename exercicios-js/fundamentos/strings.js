const escola = "Cod3r";

console.log(escola.charAt(4)); // pegar um caracter dentro da string na posição 4
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3)); // gera o codigo do caracter inserido <UNECODE.COM>
console.log(escola.indexOf('3')); // serve para pegar o indice dele 

console.log(escola.substring(1));
console.log(escola.substring(0, 3)); //ira printar as casas que forem digitadas dentro do codigo ex COD

console.log('Escola'.concat(escola).concat("!")); // concatenação uma string com uma variavel e mais uma string
console.log('Escola' + escola + "!") // concatenação pode ser feita assim tambem
console.log(escola.replace(3, 'e')); // ele ira subistituir o valor 3 pela letra E
console.log('3' + 2 ); //Não vai somar pois Strings tem preferencia
console.log(escola.replace(/\w/g, 'e')) // /\w/g, é um comando usado para subistituir all caracteres 

console.log('ana, maria, pedro'.split(',')); // ira converter em um ARRAY
// ^ o split pode ser usado para separar emails por exemplo