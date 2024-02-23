import React from "react";
import './index.css';

const Sidebar: React.FC = () => {
    return (
        <div className="">
            <div className="sidebar-header">
                <img src="images/logo.svg"/>
            </div>
            <div className="sidebar-menu">
                <p className="menu-section">My templates</p>
                <input type="search" placeholder="Search" className="search-bar" />
                    <ul className="menu-list">
                        <li className="starred"><span>⭐️</span> Software Engineer</li>
                        <li className="starred"><span>⭐️</span> Computer hardware engineer</li>
                        <li>Past search 1</li>
                    </ul>
                    <p className="menu-section">My boards</p>
                    <ul className="menu-list">
                        <li className="board"><span>🗂️</span> Board 1</li>
                        <li className="locked"><span>🔒</span> Board agent 1</li>
                    </ul>
            </div>
            <div className="sidebar-footer">
                <img src="carla-avatar.png" alt="Carla" className="user-avatar" />
                    <span>Carla</span>
                    <span className="settings-icon">⚙️</span>
            </div>
        </div>
    );
}
export default Sidebar;