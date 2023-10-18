"use client"
import { useEffect, useState } from "react"
const { useTheme } = require("next-themes")

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const [mountee, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mountee) {
        return null
    }

    return (
        <>
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
        </>
    )
}
export default ThemeSwitcher