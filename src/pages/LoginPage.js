import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {useDispatch} from "react-redux";
import {loginInitiate} from "../redux/reducers/registryReducer";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState(``);
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAdd = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password))
        navigate('/');
    }


    return (
        <div className={'registry-main'}>
            <h2>Вход</h2>
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
                <div>
                    <Button type={"submit"} variant="contained" sx={{'width': '100%'}}>
                        Войти
                    </Button>
                </div>
            </Box>
        </div>
    );
};

export default LoginPage;