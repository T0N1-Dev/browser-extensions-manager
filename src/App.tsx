import ExtensionsManager from "./components/main/ExtensionManager"
import { FilterProvider } from "@/context/Filter/filter.context"

function App() {
  return (
    <FilterProvider>
      <ExtensionsManager />
    </FilterProvider>
  )
}

export default App
