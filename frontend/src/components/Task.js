import React, { Component } from 'react'
import Header from '../template/header'
import Form from './Form'
import List from './List'

import axios from 'axios'
const URL = 'http://127.0.0.1:3001/api/todos'

export default class Task extends Component {

    constructor(props) {
        super(props)

        this.state = {
            description: '',
            list: []
        }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.refresh = this.refresh.bind(this)
    }

    componentDidMount() {
        this.refresh()
    }
    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description }).then(resp => this.refresh())
    }
    handleClear() {
        this.refresh()
    }
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }
    handleSearch() {
        this.refresh(this.state.description)
    }
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(res => this.refresh(this.state.description))
    }
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(res => this.refresh(this.state.description))
    }
    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then(res => this.refresh(this.state.description))
    }
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    render() {
        return (
            <div>
                <Header nameTitle="Cadastro de Tarefas" />
                <Form
                    handleAdd={this.handleAdd}
                    handleClear={this.handleClear}
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    description={this.state.description}
                />
                <List
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    list={this.state.list}
                />
            </div>
        )
    }
}