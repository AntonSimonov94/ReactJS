import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


const MessagePage = () => {
    const [text, setText] = useState('');
    const messages = useSelector(state => state.messages.messages);
    const dispatch = useDispatch();
    const {id} = useParams();

    const handleAdd = () => {
        const obj = {
            id: messages.length + 1,
            chatId: parseInt(id),
            text: text
        }
        dispatch({type: 'addMessage', payload: obj});
        onAddMessage();
    }
    const addBotsMessage = (id) => (dispatch) => {
        const obj = {
            id: messages.length + 2,
            chatId: parseInt(id),
            text: 'BOT: сообщение доставлено'
        }
        dispatch({type: 'addMessage', payload: obj})
    }
    const onAddMessage = () => {
        setTimeout(() => {
            dispatch(addBotsMessage(id))
        }, 3000);
    };

    const handleDelete = (id) => {
        dispatch({
            type: 'deleteMessage',
            payload: id,
        })
    }

    return (
        <div>

            {messages.filter(item => item.chatId === parseInt(id)).map((item) => {
                return (
                    <div key={item.id} className={'messages-text'}>
                        <h2>{item.text}</h2>
                        <button className={'messages-text-button'} onClick={() => handleDelete(item.id)}>X</button>
                    </div>

                )
            })}
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleAdd}>Отправить</button>
        </div>
    );
};

export default MessagePage;