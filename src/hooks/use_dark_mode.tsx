import { useEffect, useState } from "react";

const themeKey = "THEME";

export const useDarkMode = () => {
    // set theme, get from local storage, if null, set to light
    const themeOnLoad = typeof window !== "undefined" && localStorage.getItem(themeKey) === 'dark' ? 'dark' : 'light';
    const [theme, setTheme] = useState<'light'|'dark'>(themeOnLoad);

    const toggleMode = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

    // on theme change, apply to html
    useEffect(() => {
        if (typeof window === "undefined") return;

        const root = window.document.documentElement;
        const currentColour = theme === 'dark' ? 'light' : 'dark'
        root.classList.remove(currentColour);
        root.classList.add(theme);

        // save theme to local storage
        localStorage.setItem(themeKey, theme);
    }, [theme]);

    return { theme, setTheme, toggleMode }
}