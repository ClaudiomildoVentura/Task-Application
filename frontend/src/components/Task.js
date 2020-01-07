import React from 'react'
import Header from '../template/header'
import Form from './Form'
import List from './List'

export default props => (
    <div>
        <Header nameTitle="Cadastro de Tarefas" />
        <Form />
        <List />
    </div>
)