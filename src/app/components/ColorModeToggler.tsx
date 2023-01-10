import React, {useContext} from "react";

/* import { MdLightMode, MdDarkMode } from "react-icons/md"; */

import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";


import "../../design/components/color-mode-toggler.scss";

export default function ColorModeToggler() {
    const {colorTheme, toggleColorTheme} = useContext(ColorThemeContext)    
    console.log(colorTheme)
    
    return (
        <div className = "color-mode-toggler">
            <button onClick={toggleColorTheme}>
                Toggle Color Theme
            </button>
        </div>
        
    )
}