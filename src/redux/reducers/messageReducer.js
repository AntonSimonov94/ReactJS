const initialState = {
    messages: [
        {
            id: 1,
            chatId: 1,
            text: 'chat 1'
        },
        {
            id: 2,
            chatId: 2,
            text: 'chat 2'
        },
        {
            id: 3,
            chatId: 2,
            text: 'chat 3'
        }
    ]
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