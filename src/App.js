import './App.scss';
import {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function App() {
    const [messageList, setMessageList] = useState(
        []
    )
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        //console.log(event);
        if ((author !== '') && (text !== '')) {
            setMessageList(prevState => [...prevState, {id: prevState.length, author: author, text: text}])
            setText('');
        }
    }

    function botText(authorEnd) {
        if (authorEnd !== 'BOT') {
            setMessageList(prevState => [...prevState, {
                id: prevState.length,
                author: "BOT",
                text: "Cообщение отправлено от " + authorEnd
            }])
        }
    }

    useEffect(() => {
            setTimeout(() => {
                    const messageLen = messageList[messageList.length - 1];
                    if(messageLen) {botText(messageLen.author)}
                }, 2000)
        }, [messageList]
    )
    return (
        <div className={'main'}>
            <div className="main-content">
                <Box
                    className={'main-content-box'}
                    component="form"
                    sx={{
                        '& > :not(style)': {m: 1, width: '25ch'},
                    }}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <TextField id="outlined-basic"
                               label="Автор"
                               variant="outlined"
                               value={author}
                               name="author"
                               autoFocus={true}
                               onChange={(event) => setAuthor(event.target.value)}/>
                    <TextField id="outlined-basic"
                               label="Сообщение"
                               variant="outlined"
                               value={text}
                               name="text"

                               onChange={(event) => setText(event.target.value)}/>
                    <Button type={"submit"} variant="contained">Отправить</Button>
                </Box>

                {messageList.map((item) => {
                    return (
                        <div key={item.id}>
                            <h2>{item.id + ' ' + item.author + ' : ' + item.text}</h2>
                        </div>
                    )
                })}
            </div>
        </div>

    );
}
