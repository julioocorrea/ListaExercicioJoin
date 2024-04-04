//Difícil:
//Crie uma função que receba uma matriz (array de arrays) e retorne uma única string com todos os elementos da matriz separados por um ponto e vírgula, usando join.
const matrizExemplo = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];

console.log(juntarComPontoEVirgula(matrizExemplo));

function juntarComPontoEVirgula(matriz) {
    return matriz.map(subArray => subArray.join(';')).join(';');
}

//Implemente uma função que receba um array de strings e retorne uma única string com todas as strings em maiúsculas, separadas por um espaço, usando join.
const arrayDeStringsExemplo = ['hello', 'world', 'javascript'];

console.log(juntarMaiusculasComEspaco(arrayDeStringsExemplo));

function juntarMaiusculasComEspaco(arrayDeStrings) {
    return arrayDeStrings.map(str => str.toUpperCase()).join(' ');
}