try {
    const Todo = require('./todo')

    Todo.methods(['get', 'post', 'put', 'delete'])  /* Verbos http */

    Todo.updateOptions({ new: true, runValidators: true }) /* Validar após atualizar */

    module.exports = Todo

} catch (error) {
 console.log(error)
}