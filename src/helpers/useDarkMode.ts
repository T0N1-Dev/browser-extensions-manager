import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Leer dark mode desde localStorage al iniciar
    useEffect(() => {
        const storedDarkMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(storedDarkMode);
        document.body.classList.toggle("dark", storedDarkMode);
    }, []);

    // Alternar el modo oscuro
    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.body.classList.toggle("dark", newMode);
        localStorage.setItem("darkMode", newMode.toString());
    };

    return {
        darkMode,
        toggleDarkMode,
    }
}