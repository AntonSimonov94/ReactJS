import './App.scss';
import {useEffect, useRef, useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {blue} from '@mui/material/colors';

export default function App() {
    const [messageList, setMessageList] = useState(
        []
    )
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [chatArray] = useState(
        [
            {
                id: 1,
                name: 'chat 1'
            },
            {
                id: 2,
                name: 'chat 2'
            },
            {
                id: 3,
                name: 'chat 3'
            }
        ]
    )

    function handleSubmit(event) {
        event.preventDefault();
        //console.log(event);
        if ((author !== '') && (text !== '')) {
            setMessageList(prevState => [...prevState, {id: prevState.length, author: author, text: text}])
            setAuthor('');
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

    const focusOn = useRef('null');

    useEffect(() => {
            setTimeout(() => {
                const messageLen = messageList[messageList.length - 1];
                if (messageLen) {
                    botText(messageLen.author)
                }
            }, 2000)
            focusOn.current.focus()
        }, [messageList]
    )

    const theme = createTheme({
        palette: {
            primary: {
                main: blue[600],
            },
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <div className={'main'}>
                <div className={'main-list'}>
                    <List sx={{'padding': '0px'}}>
                        <ListItem sx={{
                            'display': 'flex',
                            'flex-direction': 'column',
                            'margin-right': '200px'
                        }}>
                            {chatArray.map((item) => {
                                return (
                                    <div key={item.id} className={'main-list-chat'}>
                                        <p>{item.id + ' : ' + item.name}</p>
                                    </div>
                                )
                            })}
                        </ListItem>
                    </List>
                </div>
                <div className={'main-box'}>
                    <Box
                        className={'main-content-box'}
                        component="form"
                        sx={{
                            '& > :not(style)': {m: 1, width: '25ch'},
                            'width': '30%',
                            'height': '200px',
                            'margin-top': '10px',
                            'display': 'flex',
                            'justify-content': 'center',
                            'flex-direction': 'column',
                            'align-items': 'center',
                            'background-color': '#F5F5F5',
                            'padding': '10px',
                            'border': '1px solid #87CEEB'
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
                                   inputRef={focusOn}
                                   onChange={(event) => setAuthor(event.target.value)}/>
                        <TextField id="outlined-basic"
                                   label="Сообщение"
                                   variant="outlined"
                                   value={text}
                                   name="text"

                                   onChange={(event) => setText(event.target.value)}/>
                        <div>
                            <Button type={"submit"} variant="contained" sx={{'width': '100%'}}>
                                Отправить
                            </Button>
                        </div>
                    </Box>
                    <div className={'main-massage'}>
                        {messageList.map((item) => {
                            return (
                                <div key={item.id}>
                                    <h2>{item.author + ' : ' + item.text}</h2>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </ThemeProvider>
    );
}
