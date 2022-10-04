import '../App.scss';
import React from 'react';
import {BrowserRouter, Link, Route, Router, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ChatsPage from "../pages/ChatsPage";
import ProfilePage from "../pages/ProfilePage";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import MessagePage from "../pages/MessagePage";

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<HomePage />} />
                        <Route path={'/chats'} element={<ChatsPage />} />
                        <Route path={'/profile'} element={<ProfilePage />} />
                        <Route path={'/messages/:id'}  element={<MessagePage />} />
                        <Route path={'*'} element={<NotFound/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>
    );
};
export default App;
