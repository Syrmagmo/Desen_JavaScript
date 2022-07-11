let valor // não inicializada (undefined)
console.log(valor)

valor = null // ausencia de valor NULL
console.log(valor)
// console.log(valor.toString()) // !!!! CUIRAD, isso gerará um erro
// pois não da pra inicializar uma variavel NULL

const produto = {}
console.log(produto.preco) // Preço não definido nao gerará um erro pois o produto esta definido
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined, deixe para o sistema fazer isso 
console.log(!!produto.preco) //dara falso pois o preço esta UNDEFINED
console.log(produto) // agora possui um preço indefinido 