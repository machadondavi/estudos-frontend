function rand({min = 0, max = 1000}) { //paramêtro padrão definido dentro do destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40} // armazena os parametros em um obj
console.log(rand(obj)) //chama o objeto com os parametros armazenados 
console.log(rand({ min: 955}))
console.log(rand({})) // ao iniciar o obj vazio, ele busca o paramêtro padrão na função