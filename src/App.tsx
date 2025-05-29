import ExtensionsManager from "./components/main/ExtensionManager"
import { FilterProvider } from "@/context/Filter"

function App() {
  return (
    <FilterProvider>
      <ExtensionsManager />
    </FilterProvider>
  )
}

export default App
