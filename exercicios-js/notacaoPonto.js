// a notação . é utilizada para visualizar um objeto, função ou api
// serve para visualizar os atributos 
// esta presente em quase toda a linguagem

console.log(Math.ceil(6.1))

const obj1= {}
obj1.nome = 'Bola'
// obj['nome'] = 'Bola2'
console.log(obj1.nome)

function Object(nome) {
    this.nome = nome // Usando THIS torna a variavel global
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()