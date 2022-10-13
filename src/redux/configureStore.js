import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from './reducers/chatsReducer';
import {newsReducer} from './reducers/newsReducer';
import {messageReducer} from "./reducers/messageReducer";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";
import {registryReducer} from "./reducers/registryReducer";



const reducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer,
    news: newsReducer,
    login: registryReducer
})


const config = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(config, reducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persist = persistStore(store)