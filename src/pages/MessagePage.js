import React, {useState} from 'react';
import {useParams} from "react-router-dom";

const MessagePage = () => {

    const [messageArray] = useState(
        [
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
    )
    const { id } = useParams();

    function getMessage(id) {
        return messageArray.filter(item => item.chatId == id);
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