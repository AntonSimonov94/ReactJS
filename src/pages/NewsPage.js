import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getData} from "../redux/reducers/newsReducer";
import {getErorsSelector, getLoadingSelector, getNewsSelector} from "../redux/selectors";

const NewsPage = () => {
    const news = useSelector(getNewsSelector);
    const loading = useSelector(getLoadingSelector);
    const error = useSelector(getErorsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getData())
        }, [])

    if(loading) {
        return (
            <div>
                Идет загрузка....
            </div>
        )
    }

    if(error) {
        return (
            <div>
                <p>Произошла ошибка, обновите страницу</p>
                <button onClick={getData}>Обновить</button>
            </div>
        )
    }

    return (
        <div>
            {news.map((item) =>{
                return(
                    <div key={item.id}>
                        {item.title}
                    </div>
                )
            })}
        </div>
    );
};

export default NewsPage;