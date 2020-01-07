import axios from 'axios'

const URL = 'http://127.0.0.1:3001/api/todos'

export const changeDescription = e => ({
    type: 'CHANGE', payload: e.target.value
})

export const add = (description) => {
    return dispatch => {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}
export const clear = () => {
    return [{ type: 'CLEAR' }, search()]
}
export const search = (description) => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'SEARCH', payload: resp.data }))
    }
}
export const btnDelete = (tasks) => {
    return dispatch => {
        axios.delete(`${URL}/${tasks._id}`)
            .then(resp => dispatch(search()))
    }
}
export const btnDone = (tasks) => {
    return dispatch => {
        axios.put(`${URL}/${tasks._id}`, { ...tasks, done: true })
            .then(resp => dispatch(search()))
    }
}
export const btnPeding = (tasks) => {
    return dispatch => {
        axios.put(`${URL}/${tasks._id}`, { ...tasks, done: false })
            .then(resp => dispatch(search()))
    }
}