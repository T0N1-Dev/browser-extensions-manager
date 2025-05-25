import ExtensionsManager from "./components/main/ExtensionManager"
import { DarkModeProvider } from "@/context/DarkMode"
import { FilterProvider } from "@/context/Filter"

function App() {
  return (
    <DarkModeProvider>
      <FilterProvider>
        <ExtensionsManager />
      </FilterProvider>
    </DarkModeProvider>
  )
}

export default App
