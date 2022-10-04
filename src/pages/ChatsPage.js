import {useDispatch, useSelector} from "react-redux";
import React, {useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {blue} from "@mui/material/colors";

const ChatsPage = () => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const chats = useSelector(state => state.chats.chat);
    const dispatch = useDispatch();

    const theme = createTheme({
        palette: {
            primary: {
                main: blue[600],
            },
        }
    });

    const handleDelete = (id) => {
        dispatch({type: 'delete', payload: id})
        changeId(id)
    }

    function changeId(id) {
        chats.map((item) => {
            if (item.id > id) {
                item.id = item.id - 1
            }
        })
    }

    const handleAdd = (event) => {
        event.preventDefault();
        if ((author !== '') && (text !== '')) {
            const newChat = {
                id: chats.length + 1,
                author: author,
                text: text
            }
            dispatch({type: 'add', payload: newChat})
            setAuthor('');
            setText('');
        }
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
                            {chats.map((item) => {
                                return (
                                    <div key={item.id} className={'main-list-chat'}>
                                        <Link to={`/messages/${item.id}`}
                                              className={'main-list-chat-text'}>{item.id + item.author + ' : ' + item.text}</Link>
                                        <button onClick={() => handleDelete(item.id)}
                                                className={'main-list-chat-button'}>x
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
                        onSubmit={handleAdd}
                    >
                        <TextField id="outlined-basic"
                                   label="Автор"
                                   variant="outlined"
                                   name="author"
                                   value={author}
                                   autoFocus
                                   onChange={(event) => setAuthor(event.target.value)}
                        />
                        <TextField id="outlined-basic"
                                   label="Сообщение"
                                   variant="outlined"
                                   name="text"
                                   value={text}
                                   onChange={(event) => setText(event.target.value)}
                        />
                        <div>
                            <Button type={"submit"} variant="contained" sx={{'width': '100%'}}>
                                Добавить чат
                            </Button>
                        </div>
                    </Box>
                </div>
            </div>
        </ThemeProvider>
    )
};

export default ChatsPage;

