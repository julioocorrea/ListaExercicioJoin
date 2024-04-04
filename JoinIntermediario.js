//Intermediário:
//Implemente uma função que receba um array de números e retorne uma única string com todos os números separados por um hífen usando join.
const numeros = [1, 2, 3, 4, 5];

const numerosJuntos = juntarNumerosPorHifen(numeros);

console.log(numerosJuntos); 

function juntarNumerosPorHifen(arrayDeNumeros) {
    return arrayDeNumeros.join('-');
}

//Escreva uma função que receba um array de datas e retorne uma única string com todas as datas formatadas como "DD/MM/YYYY", separadas por um ponto e vírgula, usando join.

const datas = [new Date('2024-04-01'), new Date('2024-04-02'), new Date('2024-04-03')];

console.log(concatenarDatas(datas)); 

function concatenarDatas(array) {
    const formattedDates = array.map(date => {
      const dia = String(date.getDate()).padStart(2, '0');
      const mes = String(date.getMonth() + 1).padStart(2, '0');
      const ano = date.getFullYear();
      return `${dia}/${mes}/${ano}`;
    });
    return formattedDates.join(';');
  }