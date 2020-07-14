const valores = [7.7,8.9,6.3,9.2]
console.log(valoes[0],valores[3])
valores[4]=10 //insere valor na posição

console.log(valores, valores.length) //length informa o tamanho
valores.push({id=3}, false, null, 'teste') //Js é tipagem fraca, no mesmo array pode ter varios tipos
console.log(valores)
console.log(valores.pop()) //apaga ultima posição
delete valores[0] //apaga na posição
console.log(valores)
