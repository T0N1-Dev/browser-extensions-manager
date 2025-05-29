import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import { useFilterState } from "@/context/Filter/filter.hooks";
import type { Extension } from "@/interfaces/extensionsInterface";

type ExtensionsGridProps = {
  extensions: Extension[];
  setExtensions: React.Dispatch<React.SetStateAction<Extension[]>>;
};

export const ExtensionsGrid = ({ extensions, setExtensions }: ExtensionsGridProps) => {
  const { filter } = useFilterState();

  const toggleExtension = (id: string) => {
    setExtensions((prev) =>
      prev.map((ext) => (ext.id === id ? { ...ext, isActive: !ext.isActive } : ext))
    );
  };

  const removeExtension = (id: string) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === "active") return ext.isActive;
    if (filter === "inactive") return !ext.isActive;
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredExtensions.map((extension) => (
        <Card key={extension.id} className="rounded-2xl shadow-sm hover:shadow-lg transition-all dark:bg-gray-800">
          <CardHeader className="flex flex-row items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
              <img src={extension.logo} alt={extension.name} />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg">{extension.name}</CardTitle>
              <CardDescription className="text-sm">{extension.description}</CardDescription>
            </div>
          </CardHeader>

          <CardFooter className="flex justify-between items-center">
            <Button
              size="sm"
              onClick={() => removeExtension(extension.id)}
              className="rounded-2xl bg-transparent border border-gray-300 text-gray-800 cursor-pointer hover:text-white hover:bg-red-600 dark:border-gray-600 dark:text-white dark:hover:text-gray-900"
            >
              Remove
            </Button>

            <Switch
              checked={extension.isActive}
              onCheckedChange={() => toggleExtension(extension.id)}
              className="cursor-pointer data-[state=checked]:bg-red-500 [&>span]:dark:!bg-gray-100"
            />
          </CardFooter>
        </Card>
      ))}

      {filteredExtensions.length === 0 && (
        <div className="text-center text-gray-500 py-12 dark:text-gray-400">
          <p className="text-lg">No extensions found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};
