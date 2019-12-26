import React from 'react'

export default props => {
    const tableRow = () => {
        const listTable = props.list || []
        return listTable.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <button type="button" className="btn btn-success" hide={todo.done} onClick={() => props.btnDone(todo)}>ok</button>
                    <button type="button" className="btn btn-warning" hide={!todo.done} onClick={() => props.btnPending(todo)}>p</button>
                    <button type="button" className="btn btn-danger" hide={!todo.done} onClick={() => props.btnRemove(todo)}>X</button>
                </td>
            </tr>
        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {tableRow()}
            </tbody>
        </table>
    )
}