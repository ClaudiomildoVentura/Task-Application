import { combineReducers } from 'redux'
import taskReducer from '../components/taskReducer'

const rootReducer = combineReducers({
    todo: taskReducer
})

export default rootReducer