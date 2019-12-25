import React, { Component } from 'react'
import Header from '../template/header'
import Form from './todoForm'
import List from './todoList'

export default class Todo extends Component {
    constructor(props) {
        super(props)

        this.handleAdd = this.handleAdd.bind(this)
    }
    handleAdd () {
        console.log("add")
    }

    render() {
        return (
            <div>
                <Header nameTitle="Tarefas" nameSubTitle="Cadastro" />
                <Form handleAdd={this.handleAdd} />
                <List />
            </div>
        )
    }
}