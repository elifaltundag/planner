import React, { useContext } from "react";

import "../../design/components/header.scss";

import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";

export default function Header() {
    const { colorTheme } = useContext(ColorThemeContext)

    return (
        <header className="header"
            data-colorTheme = {colorTheme}
        >
            <h1 className="header__title">Kanban Board</h1>
            <p className="header__info">Add new tasks, drag & drop them</p>
        </header>
    )
}

