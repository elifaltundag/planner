import React from "react";

import "../../design/components/settings.scss";

import ColorModeToggler from "./ColorModeToggler";
import Resetter from "./Resetter";

import { SettingsProps } from "../model/componentsProps";

export default function Settings({ isResetClicked, setIsResetClicked }: SettingsProps) {
    return (
        <div className = "settings">
            <ColorModeToggler />
            <Resetter 
                isResetClicked = {isResetClicked}
                setIsResetClicked = {setIsResetClicked}
            />
        </div>
    )
}

/* 
! Resetter props === Setting props : prop drilling ama bir seviye ok
*/