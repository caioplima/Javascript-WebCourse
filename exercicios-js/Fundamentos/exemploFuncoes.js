//funcao sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

//funcao com retorno
function soma(a,b=1){
    return a+b
}
console.log(soma(2,3))
console.log(soma(2))

//armazenando uma funcao em uma variavel
const imprimirSoma=function(a,b){
    console.log(a+b)
}
imprimirSoma(2,3)

//Armazenando uma funcao arrow em uma variavel
const soma = (a,b) => {
    return a+b
}
console.log(soma(2,3))

//retorno implicito
const subtracao = (a,b) => a-b
console.log(subtacao(2,3))