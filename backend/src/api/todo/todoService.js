try {
    const Todo = require('./todo')

    Todo.methods(['get', 'post', 'put', 'delete'])

    Todo.updateOptions({ new: true, runValidators: true })

    module.exports = Todo

} catch (error) {
    console.log(error)
}
/*
|--------------------------------------------------------------------------
| services.js
|--------------------------------------------------------------------------
|
| Arquivo ccontendo os verbos http necessários
|
| Na linha 4, estão declarados os verbos http
| Na linha 6, o método updateOptions realiza as devidas validações
|
*/