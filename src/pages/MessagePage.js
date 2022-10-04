import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const MessagePage = () => {

    const messages = useSelector( state => state.messages.messages);
    const dispatch = useDispatch();
    const { id } = useParams();
    function getMessage(id) {
        return messages.filter(item => item.chatId === parseInt(id));
    }
    return (
        <div>
            {getMessage(id).map((item) => {
                return(
                    <div key={item.id}>
                        <h2>{item.text}</h2>
                    </div>
            )})}
        </div>
    );
};

export default MessagePage;