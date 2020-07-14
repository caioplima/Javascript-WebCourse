//var criado numa funcao
function teste(){
    var a = 20
}
console.log(a)

//var tipo global
var num = 1
{
    var num = 2
    console.log(num)
}
console.log(num)