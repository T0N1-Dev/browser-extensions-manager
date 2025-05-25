import { useDarkMode } from "@/context/DarkMode/use-dark-mode";
import { Button } from "../ui/button"

export const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <div
            className={`rounded-2xl p-3 mb-8 transition-colors duration-200 ${
            darkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
        >
            <div className="flex items-center justify-between">
            <div className="flex items-center">
                <img
                src="/images/logo.svg"
                alt="Logo"
                className={`object-cover ${darkMode ? "filter invert" : ""} `}
                />
            </div>
            <Button
                onClick={toggleDarkMode}
                className={`p-0 w-12 h-12 rounded-lg cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-400 focus-visible:ring-offset-2 ${
                darkMode
                    ? "bg-gray-600 hover:bg-gray-500 active:bg-gray-500 text-gray-300" 
                    : "bg-gray-100 hover:bg-gray-200 active:bg-gray-200 text-gray-600"
                }`}
            >
                {darkMode ? (
                <img src="/images/icon-sun.svg" alt="sun-icon" />
                ) : (
                <img src="/images/icon-moon.svg" alt="moon-icon" />
                )}
            </Button>
            </div>
        </div>
    )
}
