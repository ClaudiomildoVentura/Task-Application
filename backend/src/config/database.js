try {
    const mongoose = require('mongoose')

    mongoose.Promise = global.Promise /* mongoose utiliza a promisse global do node para retirar um warning */

    module.exports = mongoose.connect('mongodb://localhost/todo', { useMongoClient: true }) /* arquivo de conexão direta com o banco */

} catch (error) {
    console.log(error)
}