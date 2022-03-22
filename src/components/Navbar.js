import React, { useState } from 'react';
import StickyBox from "react-sticky-box";
import './Navbar.css';
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import LinkedInLogo from '../images/linkedin.svg' 
import NavButton from './NavButton.js'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TextsmsIcon from '@mui/icons-material/Textsms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GridViewIcon from '@mui/icons-material/GridView';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';

export default function Navbar() {
    const [selectedId, changeSelectedId] = useState("home");
    return (
        <div className="navbar">
            <div className="nav_container">
                <div className="header_left">
                    <img className="logo" src={LinkedInLogo} alt="" />
                    <div className="header_search">
                        <SearchIcon/>
                        <input type="text" placeholder='Search'/>
                    </div>
                </div>
    
                <div className="header_right">
                    <div className="main_buttons">
                        <NavButton Icon={HomeIcon} title="Home" isActive="true" selected={selectedId} changeId={changeSelectedId} id="home"></NavButton>
                        <NavButton Icon={PeopleAltIcon} title="My Network" selected={selectedId} changeId={changeSelectedId} id="network"></NavButton>
                        <NavButton Icon={BusinessCenterIcon} title="Jobs" selected={selectedId} changeId={changeSelectedId} id="jobs"></NavButton>
                        <NavButton Icon={TextsmsIcon} title="Messaging" selected={selectedId} changeId={changeSelectedId} id="messaging"></NavButton>
                        <NavButton Icon={NotificationsIcon} title="Notifications" selected={selectedId} changeId={changeSelectedId} id="notifications"></NavButton>
                        <NavButton title="Me 🞃" selected={selectedId} changeId={changeSelectedId} id="avatar" avatar="https://media-exp1.licdn.com/dms/image/C4E03AQF9EJLP3iwzUw/profile-displayphoto-shrink_200_200/0/1612553080623?e=1653523200&v=beta&t=H84eWUdscjwTEi-I_vx9vRuIA3s5b1dYwH_SqlMo3z0"></NavButton>
                    </div>
                    <div className="divider"></div>
                    <div className="extra_buttons">
                        <NavButton Icon={GridViewIcon} title="Work 🞃" selected={selectedId} changeId={changeSelectedId} id="work"></NavButton>
                        <NavButton Icon={OndemandVideoIcon} title="Learning" selected={selectedId} changeId={changeSelectedId} id="learning"></NavButton>
                    </div>                    
                </div>
            </div>
        </div>
    )
}