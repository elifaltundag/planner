import React, {useContext} from "react";

/* import { MdLightMode, MdDarkMode } from "react-icons/md"; */

import { ColorThemeContext/* , ColorThemes */ } from "../colorThemeContext/ColorThemeContext";


import "../../design/components/color-mode-toggler.scss";

export default function ColorModeToggler() {
    const {colorTheme, toggleColorTheme} = useContext(ColorThemeContext)    
    console.log(colorTheme)

    
    return (
        <button  className = "color-mode-toggler"
            onClick = {toggleColorTheme}
        >
            Toggle Color Theme
        </button>
    )
}