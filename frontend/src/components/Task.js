import React from 'react'
import Form from './Form'
import Header from '../template/header'
import List from './List'

export default props => (
    <div>
        <Header nameTitle="Cadastro de Tarefas" />
        <Form />
        <List />
    </div>
)