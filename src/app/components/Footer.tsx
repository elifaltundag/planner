import React, {useContext} from "react";
import "../../design/components/footer.scss";

import { ColorThemeContext } from "../colorThemeContext/ColorThemeContext";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

export default function Footer() {
    const { colorTheme } = useContext(ColorThemeContext)

    return (
        <footer className="footer"
            data-colorTheme = {colorTheme}
        >
            <p className="footer__info">Design & Development by  
                <a className="footer__info__link" href="https://elifaltundag.com/" target="_blank" rel="noreferrer">Elif Altundag
                    <span className="footer__info__link__icon">
                        <FaExternalLinkSquareAlt />
                    </span> 
                </a> 
                 |  
                <a href="https://github.com/elifaltundag/planner" target="_blank" rel="noreferrer" className="footer__info__link">
                    <span className="footer__info__link__icon">
                        <FaGithub />
                    </span>
                </a>
            </p>
            
            
        </footer>
    )
}