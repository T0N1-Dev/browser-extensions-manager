import { Button } from "../ui/button"
import { useDarkMode } from "@/helpers/useDarkMode";

export const Header = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <div
            className="rounded-2xl p-3 mb-8 transition-colors duration-200 bg-white border border-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700"
        >
            <div className="flex items-center justify-between">
            <div className="flex items-center">
                <img
                src="/images/logo.svg"
                alt="Logo"
                className="object-cover dark:filter dark:invert"
                />
            </div>
            <Button
                onClick={toggleDarkMode}
                className="p-0 w-12 h-12 bg-gray-100 text-gray-600 rounded-lg cursor-pointer transition-colors duration-200  hover:bg-gray-200 active:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-400 focus-visible:ring-offset-2 dark:bg-gray-600 dark:hover:bg-gray-500 dark:active:bg-gray-500 dark:text-gray-300"
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
