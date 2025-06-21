"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface ThemeContextType {
  matrixMode: boolean
  setMatrixMode: (enabled: boolean) => void
  toggleMatrixMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [matrixMode, setMatrixMode] = useState(false)

  const toggleMatrixMode = () => {
    setMatrixMode(prev => !prev)
  }

  // Apply matrix theme to document body
  useEffect(() => {
    if (matrixMode) {
      document.body.classList.add('matrix-theme')
    } else {
      document.body.classList.remove('matrix-theme')
    }
    
    return () => {
      document.body.classList.remove('matrix-theme')
    }
  }, [matrixMode])

  return (
    <ThemeContext.Provider value={{ matrixMode, setMatrixMode, toggleMatrixMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}