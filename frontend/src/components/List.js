import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { btnDone, btnPeding, btnDelete } from './actions'

const List = props => {

    const tableRow = () => {
        const listTable = props.list || []
        return listTable.map(tasks => (
            <tr key={tasks._id}>
                <td className={tasks.done ? 'markedAsDone' : ''}>{tasks.description}</td>
                <td>
                    <button type="button" className="btn btn-success" onClick={() => props.btnDone(tasks)}>OK</button>
                    <button type="button" className="btn btn-warning" onClick={() => props.btnPeding(tasks)}>P</button>
                    <button type="button" className="btn btn-danger" onClick={() => props.btnDelete(tasks)}>X</button>
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
const mapDispatchToProps = dispatch => bindActionCreators({ btnDone, btnPeding, btnDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(List)