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
        this.Add = this.Add.bind(this)
        this.Clear = this.Clear.bind(this)
        this.Change = this.Change.bind(this)
        this.Search = this.Search.bind(this)
        this.btnDone = this.btnDone.bind(this)
        this.refresh = this.refresh.bind(this)
        this.btnRemove = this.btnRemove.bind(this)
        this.btnPending = this.btnPending.bind(this)
    }

    componentDidMount() {
        this.refresh()
    }
    Add() {
        const description = this.state.description
        axios.post(URL, { description }).then(resp => this.refresh())
    }
    Clear() {
        this.refresh()
    }
    Change(e) {
        this.setState({ ...this.state, description: e.target.value })
    }
    Search() {
        this.refresh(this.state.description)
    }
    btnRemove(todo) {
        axios.delete(`${URL}/${todo._id}`).then(res => this.refresh(this.state.description))
    }
    btnDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true }).then(res => this.refresh(this.state.description))
    }
    btnPending(todo) {
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
                    Add={this.Add}
                    Clear={this.Clear}
                    Change={this.Change}
                    Search={this.Search}
                    description={this.state.description}
                />
                <List
                    btnRemove={this.btnRemove}
                    btnDone={this.btnDone}
                    btnPending={this.btnPending}
                    list={this.state.list}
                />
            </div>
        )
    }
}