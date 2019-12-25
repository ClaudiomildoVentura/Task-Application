import React from 'react'

export default props => (
    <div role='form' className='todoForm row'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input className='form-control' id='description' value={props.description}
                onChange={props.handleChange} placeholder='Adicionar tarefa'></input>
        </div>
        <div>
            <button className='btn btn-dark' onClick={props.handleAdd}>+</button>
        </div>
    </div>
)