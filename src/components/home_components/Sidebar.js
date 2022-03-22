import React from 'react';
import './Sidebar.css';
import Avatar from "@mui/material/Avatar";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="upper_sidebar">
                <img class="background" src="https://static-exp1.licdn.com/sc/h/55k1z8997gh8dwtihm11aajyq" alt="" />
                <img class="avatar" src="https://media-exp1.licdn.com/dms/image/C4E03AQF9EJLP3iwzUw/profile-displayphoto-shrink_200_200/0/1612553080623?e=1653523200&v=beta&t=H84eWUdscjwTEi-I_vx9vRuIA3s5b1dYwH_SqlMo3z0"/>
                <div className="spacer"></div>
                <div className="content">
                    <h3>John Smith</h3>
                    <p>Bachelor of Sicence - BS at Georgia State University (Expected 2022)</p>
                </div>
            </div>
            <div className="lower_sidebar">

            </div>
        </div>
    )
}