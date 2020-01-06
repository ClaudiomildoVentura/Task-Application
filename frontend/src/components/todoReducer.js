const INITIAL_SATE = { description: '', list: [] }

export default (state = INITIAL_SATE, action) => {
    switch (action.type) {
        case 'Description_Change':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        case 'TODO_ADDED':
            return { ...state, description: '' }
        default:
            return state
    }
}