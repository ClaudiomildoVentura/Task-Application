try {
    const Todo = require('./todo')

    Todo.methods(['get', 'post', 'put', 'delete'])  /* Verbos http */

    Todo.updateOptions({ new: true, runValidators: true }) /* Validar após atualizar */

    module.exports = Todo

} catch (error) {
 console.log(error)
}
/*
|--------------------------------------------------------------------------
| Services.js
|--------------------------------------------------------------------------
|
| Arquivo ccontendo os verbos http necessários
|
|Na linha 6, o método updateOptions realiza as devidas validações
|
*/