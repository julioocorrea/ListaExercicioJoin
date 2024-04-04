//Fácil:
//Escreva uma função que receba um array de strings e retorne uma única string com todas as strings separadas por um espaço usando join.
const strings = ['Olá', 'como', 'vai', 'você?'];

const stringUnica = juntarStringsPorEspaco(strings);

console.log(stringUnica);

function juntarStringsPorEspaco(arrayDeStrings) {
    return arrayDeStrings.join(' ');
}

//Crie uma função que receba um array de palavras e retorne uma única string com todas as palavras separadas por uma vírgula usando join.
const palavras = ['maçã', 'banana', 'laranja', 'uva'];

const palavrasUnicas = juntarPalavrasPorVirgula(palavras);

console.log(palavrasUnicas); 

function juntarPalavrasPorVirgula(arrayDePalavras) {
    return arrayDePalavras.join(',');
}