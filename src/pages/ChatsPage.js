import '../App.scss';
import React, {useEffect, useRef, useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {blue} from "@mui/material/colors";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

const ChatsPage = () => {
    const [messageList, setMessageList] = useState(
        []
    )
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [chatArray, setChatArray] = useState(
        [
            {
                id: 1,
                author: 'Artem',
                text: 'chat 1'
            },
            {
                id: 2,
                author: 'Andrey',
                text: 'chat 2'
            },
            {
                id: 3,
                author: 'Ivan',
                text: 'chat 3'
            }
        ]
    )

    function handleSubmit(event) {
        event.preventDefault();
        //console.log(event);
        if ((author !== '') && (text !== '')) {
            setMessageList(prevState => [...prevState, {id: prevState.length, author: author, text: text}])
            setChatArray(prevState => [...prevState, {id: chatArray.length + 1, author: author, text: text}])
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

    function delChat(id) {
        setChatArray(chatArray.filter(item => item !== id));
        changeId(id.id)
    }

    function changeId(id) {
        chatArray.map((item) => {
            if (item.id > id) {
                item.id = item.id - 1
            }
        })
    }

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
                                        <Link to={`/messages/${item.id}`} className={'main-list-chat-text'}>{item.author + ' : ' + item.text}</Link>
                                        <button onClick={() => delChat(item)} className={'main-list-chat-button'}>x
                                        </button>
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
                                Добавить чат
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


export default ChatsPage;