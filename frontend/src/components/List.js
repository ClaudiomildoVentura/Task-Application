import React from 'react'
import { connect } from 'react-redux'

const List = props => {

    const tableRow = () => {
        const listTable = props.list || []
        return listTable.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <button type="button" className="btn btn-success" onClick={() => props.btnDone(todo)}>ok</button>
                    <button type="button" className="btn btn-warning"  onClick={() => props.btnPending(todo)}>p</button>
                    <button type="button" className="btn btn-danger"  onClick={() => props.btnRemove(todo)}>X</button>
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
const mapStateToProps = state =>({list: state.todo.list})
export default connect(mapStateToProps)(List)