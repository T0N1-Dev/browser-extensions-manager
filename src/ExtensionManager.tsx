import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { extensionsData } from "./data/extensionsData";

type Extension = {
  id: string
  logo: string
  name: string
  description: string
  isActive: boolean
}

type FilterType = "all" | "active" | "inactive"

export default function ExtensionsManager() {
  const [extensions, setExtensions] = useState<Extension[]>([])
  const [filter, setFilter] = useState<FilterType>("all")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setExtensions(extensionsData)
  }, [])

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
  })

  const activeCount = extensions.filter((ext) => ext.isActive).length
  const inactiveCount = extensions.filter((ext) => !ext.isActive).length

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDarkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div
          className={`rounded-2xl p-3 mb-8 transition-colors duration-200 ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border border-gray-200"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/images/logo.svg"
                alt="Logo"
                className={`object-cover ${isDarkMode ? "filter invert" : ""} `}
              />
            </div>
            <Button
              // variant="ghost"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-0 w-12 h-12 rounded-lg cursor-pointer transition-colors duration-200 focus-visible:ring-1 focus-visible:ring-red-400 focus-visible:ring-offset-2 ${
                isDarkMode
                  ? "bg-gray-600 hover:bg-gray-500 active:bg-gray-500 text-gray-300" 
                  : "bg-gray-100 hover:bg-gray-200 active:bg-gray-200 text-gray-600"
              }`}
            >
              {isDarkMode ? (
                <img src="/images/icon-sun.svg" alt="sun-icon" />
              ) : (
                <img src="/images/icon-moon.svg" alt="moon-icon" />
              )}
            </Button>
          </div>
        </div>

        {/* Filter Section */}
        <div className="flex items-center justify-between mt-10 mb-8 max-md:flex-col max-md:gap-4">
          <h2
            className={`text-3xl font-bold transition-colors duration-200 ${
              isDarkMode ? "text-white" : "text-gray-900"
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
                // variant={filter === type ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter(type)}
                className={`transition-colors duration-200 cursor-pointer rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 ${
                  filter === type
                    ? "bg-red-500 text-white hover:bg-red-600 dark:text-gray-800"
                    : isDarkMode
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

        {/* Extensions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExtensions.map((extension) => (
            <div
              key={extension.id}
              className={`rounded-2xl p-4 transition-all duration-200 hover:shadow-lg ${
                isDarkMode
                  ? "bg-gray-800 border border-gray-700 hover:border-gray-600"
                  : "bg-white border border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                  <img
                    src={extension.logo}
                    alt={extension.name}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-semibold text-lg mb-2 transition-colors duration-200 ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {extension.name}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed transition-colors duration-200 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {extension.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button
                  size="sm"
                  onClick={() => removeExtension(extension.id)}
                  className={`transition-colors duration-200 bg-transparent rounded-2xl cursor-pointer hover:bg-red-600 ${
                    isDarkMode
                      ? "border border-gray-600 text-gray-100 hover:text-gray-800"
                      : "border border-gray-300 text-gray-800 hover:text-gray-100"
                  }`}
                >
                  Remove
                </Button>

                <Switch
                  checked={extension.isActive}
                  onCheckedChange={() => toggleExtension(extension.id)}
                  className="data-[state=checked]:bg-red-500"
                />
              </div>
            </div>
          ))}
        </div>

        {filteredExtensions.length === 0 && (
          <div
            className={`text-center py-12 transition-colors duration-200 ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            <p className="text-lg">No extensions found for the selected filter.</p>
          </div>
        )}
      </div>
    </div>
  )
}
