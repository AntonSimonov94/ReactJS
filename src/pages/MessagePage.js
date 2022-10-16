import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {db} from "../service/firebase"


const MessagePage = () => {
    const [text, setText] = useState('');
    const [data, setData] = useState({});
    const messages = useSelector(state => state.messages.messages);
    const dispatch = useDispatch();
    const {id} = useParams();

    const handleAdd = () => {
        const obj = {
            id: messages.length + 1,
            chatId: parseInt(id),
            text: text
        }
        db.child('message').push(obj, (e) => {
            if (e) {console.log(e)}
        });
    }
    useEffect(() => {
        db.child('message').on("value", (snapshot) =>{
            if (snapshot.val() !== null) {
                setData(...snapshot.val())
            } else {
                setData({})
            }
        })
return () => {
            setData({})
}
    },[])

    const handleDelete = (id) => {
        dispatch({
            type: 'deleteMessage',
            payload: id,
        })
    }

    return (
        <div>

            {Object.keys(data).map((id) => {
                return (
                    <div key={data[id].id} className={'messages-text'}>
                        <h2>{data[id].text}</h2>
                    </div>
                )
            })}
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleAdd}>Отправить</button>
        </div>
    );
};

export default MessagePage;