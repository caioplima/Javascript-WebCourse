// atribuicao por referencia (as variaveis apontam pro mesmo endereco)
const a = {name: "teste"}
const b = b.name = 'opa'
console.log(a) //a e b estão no mesmo endereço

//quando o atribui um tipo primitivo, não passa o endereço e sim o valor
let a = 3
let b = a
b++
console.log(b)

//undefined: quando a variavel não foi inicializada e não teve valor atribuido)
//null: está vazio, não aponta para nenhum local na memoria
