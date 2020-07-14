let isAtivo = false
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)
console.log(!!isAtivo)

//Falsos, mesmo com !!

console.log(!!(''||null||0||NaN||undefined||(isAtivo=false)))