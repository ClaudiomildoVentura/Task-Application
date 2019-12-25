try {
    const mongoose = require('mongoose')

    mongoose.Promise = global.Promise

    module.exports = mongoose.connect('mongodb://localhost/todo', { useMongoClient: true }) /* */

} catch (error) {
    console.log(error)
}
/*
|--------------------------------------------------------------------------
| database.js
|--------------------------------------------------------------------------
|
| Arquivo de conexão com a base de dados
|
|Na linha 4, mongoose utiliza a promisse global do node para retirar um warning
|Na linha 6,  método de conexão direta com o banco
|
*/