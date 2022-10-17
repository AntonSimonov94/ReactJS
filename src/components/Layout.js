import React, {useContext} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import CustomLink from "./CustomLink";
import {ThemeContext} from '../context'
import {logoutInitiate} from "../redux/reducers/registryReducer";
import {useDispatch, useSelector} from "react-redux";

const Layout = () => {
    const theme = useContext(ThemeContext);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(state => state.login.currentUser)


    const handleLogout = () => {
        if(user) {
            setTimeout(() => {
                dispatch(logoutInitiate())
                }, 2000)
        }
        navigate('/login')
    }

    return (
        <>
            <div style={{background: theme.background}}>
                <header className={'header'}>
                    <CustomLink to={"/"}>Главная</CustomLink>
                    <CustomLink className={'header-link'} to={"/chats"}>Чаты</CustomLink>
                    <CustomLink className={'header-link'} to={"/profile"}>Профиль</CustomLink>
                    <CustomLink className={'header-link'} to={"/news"}>Новости</CustomLink>
                    {user ? (
                        <p className={'header-link'} onClick={handleLogout}>
                            Выход
                        </p>
                    ) : (
                        <CustomLink className={'header-link'} to={"/login"}>Вход</CustomLink>
                    )}
                    <CustomLink className={'header-link'} to={"/registry"}>Регистрация</CustomLink>
                </header>
            </div>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;