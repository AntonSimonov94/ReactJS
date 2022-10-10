import {applyMiddleware, combineReducers, createStore} from "redux";
import {chatsReducer} from './reducers/chatsReducer';
import {messageReducer} from "./reducers/messageReducer";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from "redux-persist";


const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        setTimeout(() => {
        return action(store.dispatch);
        }, 3000);
    }
    return next(action);
};


const reducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer
})


const config = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(config, reducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persist = persistStore(store)