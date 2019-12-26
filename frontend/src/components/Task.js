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
        this.handleChange = this.handleChange.bind(this)
        this.refresh = this.refresh.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()

    }

    refresh(description= '') {
        const search = description ? `&description__regex=/${description}/`: ''
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp => this.setState({ ...this.state, description, list: resp.data }))
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description }).then(resp => this.refresh())
    }

    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description))
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleClear() {
        this.refresh()
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(resp => this.refresh(this.state.description))
    }
    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false }).then(resp => this.refresh(this.state.description))
    }

    render() {
        return (
            <div>
                <Header nameTitle="Cadastro de tarefas" />

                <Form handleAdd={this.handleAdd} handleClear={this.handleClear} handleChange={this.handleChange} description={this.state.description} handleSearch={this.handleSearch} />
                <List list={this.state.list} handleRemove={this.handleRemove} handleMarkAsDone={this.handleMarkAsDone} handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}