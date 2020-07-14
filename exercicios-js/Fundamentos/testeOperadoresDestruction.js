//TESTE COM OBJETOS

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//ex1
const { nome, idade} = pessoa
console.log(nome, idade)

//ex2
const{nome: n, idade: i} = pessoa
console.log(n,i)

//ex3
const{sobrenome, bemHumorada=true} = pessoa
console.log(sobrenome, bemHumorada)

//ex4
const{endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)


//TESTE COM ARRRAYS
const[a] = [10]
console.log(a)

const [n1,,n3,,n5,n6=0]=[10,7,9,8]
console.log(n1, n3,n5,n6)

const [,[,nota]] = [[,8,8],[9,6,8]]
console.log(nota)

// TESTE OBJETO COM FUNÇÃO
function rand({min=0, max=1000}){
    const valor = Math.random()*(max-min) + min
    return Math.floor(valor)

}

const obj = {max:50 , min:40}
console.log(rand(obj))
console.log(rand({min:953}))


//TESTE ARRAY COM FUNÇÃO
function rand([min=0,max=1000]){
    if(min>max)[min,max] = [max,min]
        const valor = Math.random()*(max-min)+min
        return Math.floor(valor)
    
}
console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([]))

