import React from 'react'
import { Visibility } from "@material-ui/icons";

import './joinMember.css';

const JoinMember = () => {
    return (
        <div className="joinMember">
            <span className="joinMemberTitle">New Join Members</span>
            <ul className="joinMemberList">
                <li className="joinMemberListItem">
                    <img className="joinMemberImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="User" />
                
                <div className="joinMemberUser">
                    <span className="joinMemberUserName">Umair Shah</span>
                    <span className="joinMemberTitle">Software Engineer</span>
                </div>
                <button className="widgetButton">
            <Visibility className="joinMemberIcon" />
            Display
          </button>
                </li>
                <li className="joinMemberListItem">
                    <img className="joinMemberImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="User" />
                
                <div className="joinMemberUser">
                    <span className="joinMemberUserName">Waqas Ahmed</span>
                    <span className="joinMemberTitle">Software Engineer</span>
                </div>
                <button className="widgetButton">
            <Visibility className="joinMemberIcon" />
            Display
          </button>
                </li>
                <li className="joinMemberListItem">
                    <img className="joinMemberImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="User" />
                
                <div className="joinMemberUser">
                    <span className="joinMemberUserName">Bilal Hameed</span>
                    <span className="joinMemberTitle">Software Engineer</span>
                </div>
                <button className="widgetButton">
            <Visibility className="joinMemberIcon" />
            Display
          </button>
                </li>
                <li className="joinMemberListItem">
                    <img className="joinMemberImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="User" />
                
                <div className="joinMemberUser">
                    <span className="joinMemberUserName">M Umer</span>
                    <span className="joinMemberTitle">Software Engineer</span>
                </div>
                <button className="widgetButton">
            <Visibility className="joinMemberIcon" />
            Display
          </button>
                </li>
                <li className="joinMemberListItem">
                    <img className="joinMemberImg" src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="User" />
                
                <div className="joinMemberUser">
                    <span className="joinMemberUserName">Umair Shah</span>
                    <span className="joinMemberTitle">Software Engineer</span>
                </div>
                <button className="widgetButton">
            <Visibility className="joinMemberIcon" />
            Display
          </button>
                </li>
            </ul>
        </div>
    )
}

export default JoinMember
