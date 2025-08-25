'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'


export default function ThemeToggle() {
const { theme, setTheme, systemTheme } = useTheme()
const [mounted, setMounted] = useState(false)


useEffect(() => setMounted(true), [])
if (!mounted) return null


const current = theme === 'system' ? systemTheme : theme


return (
<button
aria-label="Toggle theme"
onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
className="p-2 rounded-md bg-white/5 hover:bg-white/6"
>
{current === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
</button>
)
}