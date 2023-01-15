import React, { useContext } from "react";

import "../../design/components/header.scss";

import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";

export default function Header() {
    const { colorTheme } = useContext(ColorThemeContext)

    return (
        <header className="header"
            data-colorTheme = {colorTheme}
        >
            <h1 className="header__title">Kanban</h1>
            <p className="header__info">Track your day</p>
        </header>
    )
}

