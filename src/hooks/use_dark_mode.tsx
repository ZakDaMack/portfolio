import { useEffect, useState } from "react";

const themeKey = "THEME";

export const useDarkMode = () => {
    // set theme, get from local storage, if null, set to light
    const [theme, setTheme] = useState<'light'|'dark'>(localStorage.getItem(themeKey) === 'dark' ? 'dark' : 'light');

    const toggleMode = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

    // on theme change, apply to html
    useEffect(() => {
        const root = window.document.documentElement;
        const currentColour = theme === 'dark' ? 'light' : 'dark'
        root.classList.remove(currentColour);
        root.classList.add(theme);

        // save theme to local storage
        localStorage.setItem(themeKey, theme);
    }, [theme]);

    return { theme, setTheme, toggleMode }
}