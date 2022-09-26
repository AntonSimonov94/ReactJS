import '../App.scss';
import React from 'react';
import {Link, useMatch} from "react-router-dom";


const CustomLink = ({to, children}) => {
    const match = useMatch(to);
    return (
        <Link to={to} className={'header-link'} style={{color: match ? 'blue' : 'black'}}>
            {children}
        </Link>
    );
};

export default CustomLink;