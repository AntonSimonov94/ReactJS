const initialState = {
    messages: []
}
export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addMessage':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case 'deleteMessage':
            return {
                ...state,
                messages: state.messages.filter((item) => item.id !== action.payload)
            }

        default:
            return state
    }
}