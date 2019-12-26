import React from 'react'

export default props => {

    const clickKey = (e) => {
        if (e.key === 'Enter') {
             props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm row'>
            <div className='col-xs-12 col-sm-9 col-md-10'>
                <input
                    className='form-control'
                    id='description'
                    placeholder='Adicionar tarefa'
                    value={props.description}
                    onChange={props.handleChange}
                    onKeyUp={clickKey}>
                </input>

            </div>
            <div>
                <button type="button" className='btn btn-primary' onClick={props.handleAdd}>+</button>
                <button type="button" className='btn btn-info' onClick={props.handleSearch}>°</button>
                <button type="button" className='btn btn-secundary' onClick={props.handleClear}>''</button>
            </div>
        </div>
    )
}