var funcs = []

for (let i = 0; i < 10; i++){ //let tem a função de guardar na memoria os valores decorridos
    funcs.push(function(){
        console.log(i)
    })
}
funcs[2]()
funcs[6]()
funcs[8]()