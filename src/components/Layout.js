import React from 'react';
import {Link, NavLink, Outlet} from "react-router-dom";
import CustomLink from "./CustomLink";

const Layout = () => {
    return (
        <>
            <header className={'header'}>
                <CustomLink  to={"/"}>Главная</CustomLink>
                <CustomLink className={'header-link'} to={"/chats"}>Чаты</CustomLink>
                <CustomLink className={'header-link'} to={"/profile"}>Профиль</CustomLink>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;