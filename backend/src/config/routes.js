try {
    const express = require('express')

    module.exports = (server) => {

        const router = express.Router()  /* api routes */
        server.use('/api', router)

        const todoService = require('../api/todo/todoService')
        todoService.register(router, '/todos') /* O metodo register utiliza todos verbos que foram declarados */

    }

} catch (error) {

}