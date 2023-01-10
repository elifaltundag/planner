import React, { useState, createContext } from "react";

import { ColorThemeContextProviderProps } from "../model/componentPropsInterfaces";

export interface ColorThemeSettings {
    colorTheme: "dark" | "light",
    toggleColorTheme?: () => void
}

export const ColorThemeContext = createContext<ColorThemeSettings>({
    colorTheme: "dark"/* ,
    toggleColorTheme:  */
})

export default function ColorThemeContextProvider({children}: ColorThemeContextProviderProps) {
    const [colorTheme, setColorTheme] = useState<"dark" | "light">("dark");

    function toggleColorTheme() {
        setColorTheme(prevColorTheme => {
            console.log(prevColorTheme)
            return prevColorTheme === "dark" ? "light" : "dark"
        })
    }

    return (
        <ColorThemeContext.Provider value = {{colorTheme, toggleColorTheme}}>
            {children}
        </ColorThemeContext.Provider>
    )
}