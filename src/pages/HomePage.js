import React from 'react';
import '../App.scss';
import {useDispatch, useSelector} from "react-redux";
import {logoutInitiate} from "../redux/reducers/registryReducer";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const user = useSelector(state => state.login.currentUser)


    const handleLogout = () => {
        if(user) {
            dispatch(logoutInitiate())
        }
        navigate('/login')
    }

    return (
        <div>
            Главная
            {user ? (
                <button onClick={() => handleLogout()}>Выйти</button>
            ): ''}

        </div>
    );
};

export default HomePage;