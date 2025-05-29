import { Header } from "./HeaderSection";
import { FilterSection } from "./FilterSection";
import { ExtensionsGrid } from "./ExtensionsGrid";
import { useEffect, useState } from "react";
import { extensionsData } from "../../data/extensionsData";
import type { Extension } from "@/interfaces/extensionsInterface";

export default function ExtensionsManager() {

  const [extensions, setExtensions] = useState<Extension[]>([]);

  useEffect(() => {
      setExtensions(extensionsData)
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-50 transition-colors duration-200 dark:dark dark:bg-gray-900"
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
