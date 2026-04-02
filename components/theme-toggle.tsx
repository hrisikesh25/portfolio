"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  return (
  <button
    onClick={toggleTheme}
    className="w-12 h-12 rounded-xl border flex items-center justify-center
               hover:bg-accent hover:text-accent-foreground
               transition-colors shadow-lg border-foreground bg-secondary"
    aria-label="Toggle theme"
  >
    {theme === "dark" ? (
      <Sun className="w-5 h-5 text-foreground" />
    ) : (
      <Moon className="w-5 h-5 text-foreground" />
    )}
  </button>
)
}
