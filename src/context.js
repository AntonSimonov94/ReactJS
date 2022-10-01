import React, {createContext} from 'react';


export const themes = {
    light: {
        background: '#E6E6FA',
    }
};

export const ThemeContext = createContext(themes.light);