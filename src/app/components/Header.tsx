import React from "react";

import "../../design/components/header.scss"

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header__title">Today</h1>
            <p className="header__info">Create your simple to-do list</p>
        </header>
    )
}

export default Header