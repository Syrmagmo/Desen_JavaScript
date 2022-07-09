let isAtivo = false
console.log(isAtivo)

isAtivo = trueconsole.log(isAtivo)

isAtivo = 1 
// os '!!' são os fatores de negação 
// '!' significa o contrario do "!!"
console.log(!!isAtivo)

console.log('os verdareiros...')
console.log(!!3)
console.log(!!-1) 
console.log(!!' ')// os ' ' preenchidos com qualquer coisa é verdadeiro
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // sera definido pelo resultado da atribuição ex TRUE sera true

console.log('os falsos...')
console.log(!!0)
console.log(!!'') // '' vazio is false
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))// sera definido pelo resultado da atribuição ex FALSE sera false

console.log('para finalizar...')
console.log(('' || null || 0 || 'epa' || 123))

let nome = ''
console.log(nome || 'Desconhecido') // caso a constante nome for nulo ira printar desconhrcido 