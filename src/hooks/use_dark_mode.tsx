"use client";

import { useEffect, useState } from "react";

const themeKey = "THEME";

type Theme = 'light' | 'dark';

const readStoredTheme = (): Theme => {
    const stored = localStorage.getItem(themeKey);
    if (stored === 'dark' || stored === 'light') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useDarkMode = () => {
    const [theme, setTheme] = useState<Theme>('light');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTheme(readStoredTheme());
        setMounted(true);
    }, []);

    const toggleMode = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

    // on theme change, apply to html
    useEffect(() => {
        if (!mounted) return;

        const root = window.document.documentElement;
        const currentColour = theme === 'dark' ? 'light' : 'dark'
        root.classList.remove(currentColour);
        root.classList.add(theme);

        // save theme to local storage
        localStorage.setItem(themeKey, theme);
    }, [theme, mounted]);

    return { theme, setTheme, toggleMode, mounted }
}
