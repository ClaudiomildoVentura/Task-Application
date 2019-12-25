import React, { Component } from 'react'
import Header from '../template/header'
import Form from './Form'
import List from './List'

import axios from 'axios'
const URL = 'http://127.0.0.1:3001/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)

        this.state = { description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        //this.refresh = this.refresh.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.refresh()

    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`).then(resp => this.setState({ ...this.state, description: '', list: resp.data }))
    }
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }
    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description }).then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh())
    }

    render() {
        return (
            <div>
                <Header nameTitle="Tarefas" nameSubTitle="Cadastro" />
                <Form handleAdd={this.handleAdd} handleChange={this.handleChange} description={this.state.description} />
                <List list={this.state.list} handleRemove={this.handleRemove} />
            </div>
        )
    }
}