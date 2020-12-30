const funcs1 = []

for(let i = 0; i < 10; i++) {
    funcs1.push(function() {
        console.log(i)
    })
}

funcs1[2]()
funcs1[8]()

const funcs2 = []

for(var i = 0; i < 10; i++) {
    funcs2.push(function() {
        console.log(i)
    })
}

funcs2[2]()
funcs2[8]()

console.log(funcs1)