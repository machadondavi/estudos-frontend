function tratarErroELancar(erro) {
    //throw new Error("Ocorreu um erro no sistema!")
    //throw 10
    //throw false
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    }  catch(e){
        tratarErroELancar (e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)