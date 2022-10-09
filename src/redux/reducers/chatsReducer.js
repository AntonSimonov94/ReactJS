const initialState = {
    chat: [
        {
            id: 1,
            author: 'Artem',
            text: 'chat 1'
        },
        {
            id: 2,
            author: 'Andrey',
            text: 'chat 2'
        },
        {
            id: 3,
            author: 'Ivan',
            text: 'chat 3'
        }
    ]
}
export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addChat':
            return {
                ...state,
                chat: [...state.chat, action.payload]
            }


        case 'deleteChat':
            return {
                ...state,
                chat: state.chat.filter((item) => item.id !== action.payload)
            }

        default:
            return state
    }
}