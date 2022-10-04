import {combineReducers, createStore} from "redux";
import {chatsReducer} from './reducers/chatsReducer';
import {messageReducer} from "./reducers/messageReducer";




const reducer = combineReducers( {
    chats: chatsReducer,
    messages: messageReducer
})
export const store = createStore(reducer)