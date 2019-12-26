import React from 'react'

export default props => {

    const clickKey = (e) => {
        if (e.key === 'Enter') {
            props.Add()
        } else if (e.key === 'Escape') {
            props.Clear()
        }
    }

    return (
        <div role='form' className='Form row'>
            <div className='col-xs-12 col-sm-9 col-md-10'>
                <input
                    className='form-control'
                    id='description'
                    placeholder='Adicionar tarefa'
                    value={props.description}
                    onChange={props.Change}
                    onKeyUp={clickKey}>
                </input>

            </div>
            <div>
                <button type="button" className='btn btn-primary' onClick={props.Add}>+</button>
                <button type="button" className='btn btn-info' onClick={props.Search}>°</button>
                <button type="button" className='btn btn-secundary' onClick={props.Clear}>''</button>
            </div>
        </div>
    )
}