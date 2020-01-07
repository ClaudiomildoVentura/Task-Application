import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { markedAsDone, markedAsPeding, remove } from './todoActions'

const List = props => {

    const tableRow = () => {
        const listTable = props.list || []
        return listTable.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <button type="button" className="btn btn-success" onClick={() => props.markedAsDone(todo)}>ok</button>
                    <button type="button" className="btn btn-warning" onClick={() => props.markedAsPeding(todo)}>p</button>
                    <button type="button" className="btn btn-danger" onClick={() => props.remove(todo)}>X</button>
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
const mapStateToProps = state => ({ list: state.todo.list })
const mapDispatchToProps = dispatch => bindActionCreators({ markedAsDone, markedAsPeding, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)