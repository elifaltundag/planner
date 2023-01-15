import React from "react";

import { SettingsProps } from "../model/componentsProps";
import { MdRestorePage } from "react-icons/md";

export default function Resetter({ isResetClicked, setIsResetClicked }: SettingsProps) {
    return (
        <button className="btn--reset-board"
            onClick = {() => setIsResetClicked(true)}
        >
            <MdRestorePage />
        </button>
    )
}