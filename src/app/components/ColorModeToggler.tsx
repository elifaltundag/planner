import React, {useContext} from "react";

import { MdLightMode, MdDarkMode } from "react-icons/md";

import { ColorTheme } from "../model/enums";

import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";


import "../../design/components/color-mode-toggler.scss";

export default function ColorModeToggler() {
    const {colorTheme, toggleColorTheme} = useContext(ColorThemeContext)    

    return (
        <button  className = "color-mode-toggler"
            onClick = {toggleColorTheme}
            data-colorTheme = {colorTheme}
        >
            {colorTheme === ColorTheme.DARK ? <MdLightMode /> : <MdDarkMode />}   
        </button>
    )
}