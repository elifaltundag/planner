import React from "react";

import "../../design/components/header.scss"

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header__title">Kanban</h1>
            <p className="header__info">Track your project</p>
        </header>
    )
}

export default Header