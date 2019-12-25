try {
    const express = require('express')

    module.exports = (server) => {

        const router = express.Router()  /* api routes */
        server.use('/api', router)

        const todoService = require('../api/todo/todoService')
        todoService.register(router, '/todos') /*  */
    }

} catch (error) {
    console.log(error)
}
/*
|--------------------------------------------------------------------------
| routes.js
|--------------------------------------------------------------------------
|
| Arquivo com as rotas do servidor
|
|Na linha 10, o método register utiliza todos verbos que foram declarados
|no todoServices
*/