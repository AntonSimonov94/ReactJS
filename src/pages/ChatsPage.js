import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {Link, useParams} from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {blue} from "@mui/material/colors";
import {db} from "../service/firebase";

const ChatsPage = () => {
    const [data, setData] = useState({});
    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');
    const chats = useSelector(state => state.chats.chat);
    const dispatch = useDispatch();
    let count = 0;


    const theme = createTheme({
        palette: {
            primary: {
                main: blue[600],
            },
        }
    });

    const handleDelete = (id) => {
        dispatch({type: 'deleteChat', payload: id})
        changeId(id)
    }

    function changeId(id) {
        chats.map((item) => {
            if (item.id > id) {
                item.id = item.id - 1
            }
        })
    }

    const handleAdd = () => {
        const obj = {
            id: count,
            author: author,
            email: email
        }
        db.child('chats').push(obj, (e) => {
            if (e) {console.log(e)}
        });
        setAuthor('');
        setEmail('');
    }
    useEffect(() => {
        db.child('chats').on("value", (snapshot) =>{
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
                            {Object.keys(data).map((mid) => {
                                return (
                                    <div key={data[mid].id} className={'main-list-chat'}>
                                        <Link to={`/messages/${data[mid].id}`}
                                              className={'main-list-chat-text'}>{data[mid].author}</Link>
                                        <button onClick={() => handleDelete(data[mid].id)}
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
                                   label="Email"
                                   variant="outlined"
                                   name="text"
                                   value={email}
                                   onChange={(event) => setEmail(event.target.value)}
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

