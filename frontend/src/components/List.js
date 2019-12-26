import React from 'react'

export default props => {
    const renderRows = () => {
        const listTable = props.list || []
        return listTable.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <button type="button" className="btn btn-success" hide={todo.done} onClick={() => props.handleMarkAsDone(todo)}>ok</button>
                    <button type="button" className="btn btn-warning" hide={!todo.done} onClick={() => props.handleMarkAsPending(todo)}>p</button>
                    <button type="button" className="btn btn-danger" hide={!todo.done} onClick={() => props.handleRemove(todo)}>X</button>
                </td>
            </tr>
        ))
    }
    return (
        <table className='table table-dark"'>
            <thead className="thead-dark">
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}
63