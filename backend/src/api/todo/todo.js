try {
    const restful = require('node-restful')
    const mongoose = restful.mongoose

    const todoSchema = new mongoose.Schema({
        description: { type: String, required: true },
        done: { type: Boolean, required: true, default: false }, /* Criação do bd com as colunas description, done e createdAt */
        createdAt: { type: Date, default: Date.now }
    })

    module.exports = restful.model('Todo', todoSchema)

} catch (error) {

}