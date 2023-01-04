import React from "react";

import "../../design/components/header.scss"

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header__title">Daily Kanban</h1>
            <p className="header__info">Track your day</p>
        </header>
    )
}

export default Header