import React, {useContext} from 'react';
import {Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";
import {ThemeContext} from '../context'

const Layout = () => {
    const theme = useContext(ThemeContext);
    return (
        <>
            <div style={{background: theme.background}}>
                <header className={'header'}>
                    <CustomLink to={"/"}>Главная</CustomLink>
                    <CustomLink className={'header-link'} to={"/chats"}>Чаты</CustomLink>
                    <CustomLink className={'header-link'} to={"/profile"}>Профиль</CustomLink>
                </header>
            </div>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;