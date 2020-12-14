const valores = [5.5, 6, 7.5, 7.6]
console.log(valores[0], valores[3])
console.log(valores.length) // conta o numero de elementos em um array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) // retira o ultimo elemento do array

console.log(valores)

delete valores[5]
console.log(valores)