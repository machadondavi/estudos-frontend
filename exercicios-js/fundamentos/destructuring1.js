// novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua 21',
        numero: 15
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

//para acessar um objeto dentro de outro objeto 
const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)

const {endereco} = pessoa
console.log(endereco)


