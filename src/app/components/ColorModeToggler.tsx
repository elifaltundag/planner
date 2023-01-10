import React, {useContext} from "react";

/* import { MdLightMode, MdDarkMode } from "react-icons/md"; */

import { ColorThemeContext/* , ColorThemes */ } from "../colorThemeContext/ColorThemeContext";


import "../../design/components/color-mode-toggler.scss";

export default function ColorModeToggler() {
    const {colorTheme, toggleColorTheme} = useContext(ColorThemeContext)    

    const styles: React.CSSProperties = {
        backgroundColor: `var(--clr-bg-${colorTheme})`,
        color: `var(--clr-txt-${colorTheme})`
    }
    
    return (
        <button  className = "color-mode-toggler"
            onClick = {toggleColorTheme}
            style = {styles}>
            Toggle Color Theme
        </button>
    )
}