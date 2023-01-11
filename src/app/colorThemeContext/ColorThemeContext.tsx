import React, { useState, createContext } from "react";

import { ColorThemeContextProviderProps } from "../model/componentsPropsModel";
import { ColorTheme } from "../model/enums";
import { getPreferredColorTheme } from "../functions/accessLocalStorage";

export interface ColorThemeSettings {
    colorTheme: ColorTheme
    toggleColorTheme?: () => void
}

export const ColorThemeContext = createContext<ColorThemeSettings>({
    colorTheme: ColorTheme.DARK
})

export default function ColorThemeContextProvider({children}: ColorThemeContextProviderProps) {
    const [colorTheme, setColorTheme] = useState<ColorTheme>(getPreferredColorTheme());

    function toggleColorTheme() {
        setColorTheme(prevColorTheme => prevColorTheme === ColorTheme.DARK ? ColorTheme.LIGHT : ColorTheme.DARK)
    }

    return (
        <ColorThemeContext.Provider value = {{colorTheme, toggleColorTheme}}>
            {children}
        </ColorThemeContext.Provider>
    )
}