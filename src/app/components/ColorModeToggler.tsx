import React from "react";

import { MdLightMode, MdDarkMode } from "react-icons/md";

import { ColorModeTogglerProps } from "../model/componentPropsInterfaces";
import "../../design/components/color-mode-toggler.scss";

export default function ColorModeToggler({ isDarkModeOn, setIsDarkModeOn }: ColorModeTogglerProps) {
    return (
        <div className = "color-mode-toggler">
            <MdDarkMode />
            <MdLightMode />
        </div>
    )
}