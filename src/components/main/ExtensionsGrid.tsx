import { Button } from "../ui/button"
import { Switch } from "../ui/switch"
import { useFilter } from "@/context/Filter";
import type { Extension } from "@/interfaces/extensionsInterface";

type ExtensionsGridProps = {
  extensions: Extension[];
  setExtensions: React.Dispatch<React.SetStateAction<Extension[]>>;
};

export const ExtensionsGrid = ({ extensions, setExtensions }: ExtensionsGridProps) => {
    const { filter } = useFilter();

    const toggleExtension = (id: string) => {
        setExtensions((prev) =>
        prev.map((ext) =>
            ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
        )
        )
    }

    const removeExtension = (id: string) => {
        setExtensions((prev) => prev.filter((ext) => ext.id !== id))
    }

    const filteredExtensions = extensions.filter((ext) => {
        if (filter === "active") return ext.isActive
        if (filter === "inactive") return !ext.isActive
        return true
    });


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExtensions.map((extension) => (
        <div
            key={extension.id}
            className="rounded-2xl p-4 transition-all duration-200 hover:shadow-lg bg-white border border-gray-200 hover:border-gray-300 dark:bg-gray-800 dark:border dark:border-gray-700 dark:hover:border-gray-600"
        >
            <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                <img
                src={extension.logo}
                alt={extension.name}
                />
            </div>
            <div className="flex-1">
                <h3
                className="font-semibold text-lg mb-2 transition-colors duration-200 text-gray-900 dark:text-white"
                >
                {extension.name}
                </h3>
                <p
                className="text-sm leading-relaxed transition-colors duration-200 text-gray-600 dark:text-gray-400"
                >
                {extension.description}
                </p>
            </div>
            </div>

            <div className="flex items-center justify-between">
            <Button
                size="sm"
                onClick={() => removeExtension(extension.id)}
                className="transition-colors duration-200 bg-transparent rounded-2xl cursor-pointer border border-gray-300 text-gray-800 hover:text-gray-100 hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 dark:border dark:border-gray-600 dark:text-gray-100 dark:hover:text-gray-800"
            >
                Remove
            </Button>

            <Switch
                checked={extension.isActive}
                onCheckedChange={() => toggleExtension(extension.id)}
                className="data-[state=checked]:bg-red-500 cursor-pointer focus-visible:outline-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 [&>span]:dark:!bg-gray-100"
            />
            </div>
        </div>
        ))}

        {filteredExtensions.length === 0 && (
          <div
            className="text-center text-gray-500 py-12 transition-colors duration-200 dark:text-gray-400"
          >
            <p className="text-lg">No extensions found for the selected filter.</p>
          </div>
        )}
    </div>
  )
}
