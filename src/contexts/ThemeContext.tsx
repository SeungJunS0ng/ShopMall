import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Theme = "light" | "dark"

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme')

        return (saved as Theme) || 'light'
    })

    useEffect(() => {
        localStorage.setItem('theme', theme)
        document.body.className = theme
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    const value: ThemeContextType = {
        theme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error('useTheme는 ThemeProvider 안에서만 사용할 수 있습니다')
    }
    return context
}