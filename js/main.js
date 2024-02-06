let times = ['paysandu','Vila Nova','Amazonas','Ponte Preta','Juventude','Criciuma' ]
let frutas = [];

//modificar o valor de u item array
times[0]='Satus'
//ler valor de um item do array
console.log(`Valor do time de posição número 3 ${times[3]}`);
let time = times[5];
console.log(`Valor da variavel time ${time}`);
// Mostrando o conteúdo de todo array
console.log(`Conteúdo do Array ${times}`);
// Adicionando elemento array
times.push('Curintia');
console.log(`Conteúdo do array ${times}`);
frutas.push(`Uva`);
console.log(`Conteúdo do array ${frutas}`);

console.log(times.join('-'))

// console.log(times);
// console.log(frutas);

console.log(times.length); //comprimento do array
console.log(`Ultimo time do array ${times[times.length-1]}`); //ultimo time do array

times.forEach(element =>{
    console.log(element);
})

