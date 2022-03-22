import React, { useState } from "react";
import "./NavButton.css";
import Avatar from "@mui/material/Avatar";

export default function NavButton({Icon, title, avatar, selected, changeId, id}) {
    const changeFunction = () => {
        changeId(id);
    }
    return (   
        <div className={(selected === id) ? "active nav_button" : "nav_button"} onClick={changeFunction}>
            {Icon && <Icon className="nav_button_icon"></Icon>}
            {avatar &&(
                <Avatar className="nav_button_icon" src={avatar}/>
            )}
            <h3 className="nav_button_title">{title}</h3>
            <div className="activated"></div>
        </div>
    )
}