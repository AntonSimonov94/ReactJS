
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
        default:
            return state
    }
}