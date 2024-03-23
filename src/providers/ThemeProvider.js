import React from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';

const getTheme = () => {
    const theme = `${localStorage?.getItem('theme')}`; // проверяет тему в localStorage
    if (Object.values(themes).includes(theme)) return theme;

    const userMedia = window.matchMedia('(prefers-color-scheme: light)'); // проверяет тему пользователя в ОС (light)
    if (userMedia.matches) return themes.light;

    return themes.dark;
}

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState(getTheme);

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;