import './App.scss';
import React from 'react';
import {BrowserRouter, Link, Route, Router, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatsPage from "./pages/ChatsPage";
import ProfilePage from "./pages/ProfilePage";

const App = () => {
    return (
        <BrowserRouter>
            <header className={'header'}>
                <Link className={'header-link'} to={"/"}>Главная</Link>
                <Link className={'header-link'} to={"/chats"}>Чаты</Link>
                <Link className={'header-link'} to={"/profile"}>Профиль</Link>

            </header>

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/chats' element={<ChatsPage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                </Routes>


        </BrowserRouter>
    );
};

export default App;