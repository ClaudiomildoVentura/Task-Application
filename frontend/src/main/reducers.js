import { combineReducers } from 'redux'
import todoreducer from '../components/todoReducer'

const rootReducer = combineReducers({
    todo: todoreducer
})

export default rootReducer