import { Header } from "./HeaderSection";
import { useDarkMode } from "@/context/DarkMode/use-dark-mode";
import { FilterSection } from "./FilterSection";
import { ExtensionsGrid } from "./ExtensionsGrid";
import { useEffect, useState } from "react";
import { extensionsData } from "../../data/extensionsData";
import type { Extension } from "@/interfaces/extensionsInterface";

export default function ExtensionsManager() {
  
  const { darkMode } = useDarkMode();

  const [extensions, setExtensions] = useState<Extension[]>([]);

  useEffect(() => {
      setExtensions(extensionsData)
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <Header />

        {/* Filter Section */}
        <FilterSection extensionsProp={extensions} />

        {/* Extensions Grid */}
        <ExtensionsGrid extensions={extensions} setExtensions={setExtensions}/>

      </div>
    </div>
  )
}
