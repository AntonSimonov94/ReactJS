import '../App.scss';
import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ChatsPage from "../pages/ChatsPage";
import ProfilePage from "../pages/ProfilePage";
import Layout from "./Layout";
import NotFound from "../pages/NotFound";
import MessagePage from "../pages/MessagePage";
import NewsPage from "../pages/NewsPage";
import LoginPage from "../pages/LoginPage";
import RegistryPage from "../pages/RegistryPage";

const App = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<HomePage />} />
                        <Route path={'/chats'} element={<ChatsPage />} />
                        <Route path={'/profile'} element={<ProfilePage />} />
                        <Route path={'/messages/:id'}  element={<MessagePage />} />
                        <Route path={'/news'} element={<NewsPage />} />
                        <Route path={'/login'} element={<LoginPage/>}/>
                        <Route path={'/registry'} element={<RegistryPage/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Route>
                </Routes>
        </BrowserRouter>
    );
};
export default App;
