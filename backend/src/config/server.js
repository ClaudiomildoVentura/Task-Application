try {
    const bodyParser = require('body-parser')
    const express = require('express')

    const server = express()

    server.use(bodyParser.urlencoded({ extended: true }))
    server.use(bodyParser.json())

    const port = process.env.PORT || 3000

    server.listen(port, () => {
        console.log(`Server on, at localhost: ${port}`)
    })

     module.exports = server

} catch (error) {
    console.log(error)
}
/* Arquivo com as configurações do servidor */