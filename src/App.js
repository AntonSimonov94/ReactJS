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
            setMessageList(prevState => [...prevState, {author: author, text: text}])
        }
    }

    useEffect(() => {
            setTimeout(() => {
                const authorEnd = messageList[messageList.length - 1].author;
                if (authorEnd !== 'BOT') {
                    setMessageList(prevState => [...prevState, {
                        author: "BOT",
                        text: "Cообщение отправлено от " + authorEnd
                    }])
                }
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
                '& > :not(style)': { m: 1, width: '25ch' },
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
                       ref={TextField => TextField && TextField.focus()}
                       onChange={(event) => setAuthor(event.target.value)} />
            <TextField id="outlined-basic"
                       label="Сообщение"
                       variant="outlined"
                       value={text}
                       name="text"

                       onChange={(event) => setText(event.target.value)}/>
            <Button type={"submit"} variant="contained">Отправить</Button>
        </Box>
            {messageList.map((item) => <h2>{item.author + ' : ' + item.text}</h2>)}
        </div>
        </div>

    );
}
