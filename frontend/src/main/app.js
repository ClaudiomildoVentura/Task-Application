import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../template/custom.css'

export default props => (
    <div className="container">
        <Menu />
        <Routes />
    </div>
)