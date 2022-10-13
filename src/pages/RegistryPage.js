
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {registryInitiate} from "../redux/reducers/registryReducer";

const RegistryPage = () => {
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();


const handleAdd = (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
       return;}
        dispatch(registryInitiate(displayName, email, password))
    }


    return (
        <div className={'registry-main'}>
            <h2>Регистрация</h2>
            <Box
                className={'main-content-box'}
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                    'width': '30%',
                    'height': '200px',
                    marginTop: '80px',
                    'display': 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    'padding': '10px',
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleAdd}
            >
                <TextField id="outlined-basic"
                           label="Имя"
                           variant="outlined"
                           name="author"
                           value={displayName}
                           autoFocus
                           onChange={(event) => setDisplayName(event.target.value)}
                />
                <TextField id="outlined-basic"
                           label="Email"
                           variant="outlined"
                           name="author"
                           value={email}
                           autoFocus
                           onChange={(event) => setEmail(event.target.value)}
                />
                <TextField id="outlined-basic"
                           label="Пароль"
                           variant="outlined"
                           name="text"
                           value={password}
                           onChange={(event) => setPassword(event.target.value)}
                />
                <TextField id="outlined-basic"
                           label="Повторите пароль"
                           variant="outlined"
                           name="text"
                           value={passwordConfirm}
                           onChange={(event) => setPasswordConfirm(event.target.value)}
                />
                <div>
                    <Button type={"submit"} variant="contained" sx={{'width': '100%'}}>
                        Зарегистрироваться
                    </Button>
                </div>
            </Box>
            
        </div>
    );
};

export default RegistryPage;