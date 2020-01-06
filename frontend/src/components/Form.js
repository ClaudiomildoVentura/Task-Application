import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search } from './todoActions'

class Form extends Component {
    constructor(props) {
        super(props)
        this.clickKey = this.clickKey.bind(this)
    }

    clickKey(e) {
        const { add, description } = this.props
        if (e.key === 'Enter') {
            add(description)
        } else if (e.key === 'Escape') {
            this.props.Clear()
        }
    }

    componentWillMount() {
        this.props.search()
    }
    render() {
        const { add, description } = this.props
        return (
            <div role='form' className='Form row'>
                <div className='col-xs-12 col-sm-9 col-md-10'>
                    <input
                        className='form-control'
                        id='description'
                        placeholder='Adicionar tarefa'
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.clickKey}>
                    </input>

                </div>
                <div>
                    <button type="button" className='btn btn-primary' onClick={()=> add(description)}>+</button>
                    <button type="button" className='btn btn-info' onClick={this.props.Search}>°</button>
                    <button type="button" className='btn btn-secundary' onClick={this.props.Clear}>''</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Form)