import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {db} from "../service/firebase"


const MessagePage = () => {
    const [text, setText] = useState('');
    const [data, setData] = useState({});
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const {id} = useParams();


    const handleAdd = () => {
        const obj = {
            id: count,
            chatId: parseInt(id),
            text: text
        }
        db.child('message').push(obj, (e) => {
            if (e) {console.log(e)}
        });
        setCount(count +1);
    }
    useEffect(() => {
        db.child('message').on("value", (snapshot) =>{
            if (snapshot.val() !== null) {
                setData(snapshot.val())
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

            {Object.keys(data).map((mid) => {
                console.log(data[mid].chatId);
                if (parseInt(data[mid].chatId) === parseInt(id)) {
                    return (
                        <div key={data[mid].id} className={'messages-text'}>
                            <h2>{data[mid].text}</h2>
                        </div>
                    )
                }


            })}
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleAdd}>Отправить</button>
        </div>
    );
};

export default MessagePage;