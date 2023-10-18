"use client"
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Providers({ children }) {

    const [mountee , setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    if (!mountee) {
        return <>{children}</>
    }
    return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}
