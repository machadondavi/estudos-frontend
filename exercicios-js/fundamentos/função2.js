//armazenando uma função em uma variável

const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

//armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    console.log(a + b)
}

soma(10, 10)

//retorno implicito
const subtacao = (a, b) => a - b

console.log(subtacao(5, 2))