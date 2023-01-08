import React from "react";

import { MdLightMode, MdDarkMode } from "react-icons/md";

import "../../design/components/color-mode-toggler.scss";

export default function ColorModeToggler() {
    return (
        <div className = "color-mode-toggler">
            <MdDarkMode />
            <MdLightMode />
        </div>
    )
}