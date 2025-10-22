"use client"

import { Moon, Sun } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  isDark: boolean
  toggleTheme: () => void
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="#" className="group flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-300">
                NS
              </div>
              <span className="font-serif font-bold text-lg hidden sm:inline group-hover:text-primary transition-colors duration-300">
                Naeem Sarker
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-8 ml-auto">
            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex-shrink-0"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary" />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
