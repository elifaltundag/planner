import React, { useState, createContext } from "react";

import { ColorThemeContextProviderProps } from "../model/componentPropsInterfaces";

export enum ColorThemes {
    DARK = "dark",
    LIGHT = "light"
}

export interface ColorThemeSettings {
    colorTheme: ColorThemes
    toggleColorTheme?: () => void
}

export const ColorThemeContext = createContext<ColorThemeSettings>({
    colorTheme: ColorThemes.DARK
})

export default function ColorThemeContextProvider({children}: ColorThemeContextProviderProps) {
    const [colorTheme, setColorTheme] = useState<ColorThemes>(ColorThemes.DARK);

    function toggleColorTheme() {
        setColorTheme(prevColorTheme => {
            console.log(prevColorTheme)
            return prevColorTheme === ColorThemes.DARK ? ColorThemes.LIGHT : ColorThemes.DARK
        })
    }

    return (
        <ColorThemeContext.Provider value = {{colorTheme, toggleColorTheme}}>
            {children}
        </ColorThemeContext.Provider>
    )
}