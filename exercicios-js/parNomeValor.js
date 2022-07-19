// par nome/valor

const saudacao = 'opa' // contexto léxico 1 

function exec() {
    const saudacao = "Fallla " // contexto lexico 2 
    return saudacao
}

// objetos são grupos alinhados de pares nome/valor
const Cliente = {
    nome: 'Amanda',
    idade: 21,
    peso: 52,
    endereco:{
        logradouro: 'Rua Muito Legal',
        numero: 123,
        tel: 1123523451234
    }
}
console.log(saudacao)
console.log(exec())
console.log(Cliente)