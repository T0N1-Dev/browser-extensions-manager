import { useContext } from "react";
import { DarkModeContext } from "./context";

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode must be used withing an DarkModeProvider");
    }
    return context;
};
