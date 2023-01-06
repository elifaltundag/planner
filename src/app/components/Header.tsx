import React from "react";

import "../../design/components/header.scss";



export default function Header() {
    return (
        <header className = "header">
            <h1 className = "header__title">Kanban Board</h1>
            <p className = "header__info">Track your day</p>
        </header>
    )
}

