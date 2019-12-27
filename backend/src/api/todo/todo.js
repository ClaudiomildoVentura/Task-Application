try {
    const restful = require('node-restful')
    const mongoose = restful.mongoose

    const todoSchema = new mongoose.Schema({
        description: { type: String, required: true },
        done: { type: Boolean, required: true, default: false },
        createdAt: { type: Date, default: Date.now }
    })

    module.exports = restful.model('Todo', todoSchema)

} catch (error) {
console.log(error)
}
/*
|--------------------------------------------------------------------------
| todo.js
|--------------------------------------------------------------------------
| Arquivo contendo os schema da base de dados.
|
|
| Na linha 5 até a 9, Criação do bd com as colunas description, done e
| createdAt
|
*/