
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
        case 'add':
            return {

            }


        case 'delete':
            return {
                ...state,
                chats: state.chat.filter((item) => item.id !== action.payload)
            }

        default:
            return state
    }
}