//criando objeto de forma dinâmica

const prod1 = {}
prod1.nome = 'Iphone 8'
prod1.preco = 4998.90
prod1.setor = 'Eletronicos'
prod1.estoque = 20

console.log(prod1)

//criando objeto de forma literal

const prod2 = {
    nome: 'Samsung S10',
    preco: 3999.90,
    setor: 'Eletrônicos',
    estoque: 15,
    cores: {            //é possivel adicionar objetos dentro de objeto
        cor1: 'azul',
        cor2: 'verde' 
    }
}

console.log(prod2)