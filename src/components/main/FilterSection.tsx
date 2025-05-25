import { useDarkMode } from "@/context/DarkMode/use-dark-mode"
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import type { Extension } from "@/interfaces/extensionsInterface";
import type { FilterType } from "@/interfaces/filterType";
import { useFilter } from "@/context/Filter";

type FilterSectionProps = {
  extensionsProp: Extension[];
};

export const FilterSection = ({extensionsProp}: FilterSectionProps) => {
    const { filter, setFilter } = useFilter();
    const { darkMode } = useDarkMode();

    const activeCount = extensionsProp.filter((ext) => ext.isActive).length
    const inactiveCount = extensionsProp.filter((ext) => !ext.isActive).length

  return (
    <div className="flex items-center justify-between mt-10 mb-8 max-md:flex-col max-md:gap-4">
        <h2
        className={`text-3xl font-bold transition-colors duration-200 ${
            darkMode ? "text-white" : "text-gray-900"
        }`}
        >
        Extensions List
        </h2>

        <div
        className="flex gap-2 transition-colors duration-200"
        >
        {(["all", "active", "inactive"] as FilterType[]).map((type) => (
            <Button
            key={type}
            size="sm"
            onClick={() => setFilter(type)}
            className={`transition-colors duration-200 cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-400 focus-visible:ring-offset-2 ${
                filter === type
                ? "bg-red-500 text-white hover:bg-red-600 dark:text-gray-800"
                : darkMode
                ? "bg-neutral-600 shadow-sm border border-neutral-400 text-gray-300 hover:bg-neutral-500"
                : "bg-white shadow-sm text-gray-600 hover:bg-gray-100"
            }`}
            >
            {type.charAt(0).toUpperCase() + type.slice(1)}
            {type !== "all" && (
                <Badge variant="secondary" className="bg-gray-200 text-gray-800">
                {type === "active" ? activeCount : inactiveCount}
                </Badge>
            )}
            </Button>
        ))}
        </div>
    </div>
  )
}
