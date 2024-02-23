import React from "react";
import './index.css';

const Sidebar: React.FC = () => {
    return (
        <div className="">
            <div className="sidebar-header">
                <img src="images/logo.svg" />
            </div>
            <div className="sidebar-nav">
                <div className="sidebar-menu-picker text-bold">
                    <img src="images/menu-picker-template.svg" />
                    <span>My Templates</span>
                </div>
                <div className="sidebar-history-container">
                    <div className="sidebar-menu-picker ">
                        <img src="images/search.svg" />
                    </div>
                    <div className="sidebar-menu-picker">
                        <img src="images/favorite-gold.png" />
                        <span>Software Enginner</span>
                    </div>
                    <div className="sidebar-menu-picker">
                        <img src="images/favorite-gold.png" />
                        <span>Computer hardware engineer</span>
                    </div>
                    <div className="sidebar-menu-picker">
                        <img src="images/favorite-gold.png" />
                        <span>Network Engineer</span>
                    </div>
                    <div className="sidebar-menu-picker">
                        <img src="images/favorite-gold.png" />
                        <span>Tecnical Support</span>
                    </div>
                    <div className="sidebar-menu-picker">
                        <img src="images/favorite-gold.png" />
                        <span>Network administrator</span>
                    </div>
                    <div className="sidebar-menu-picker">
                        <img src="images/favorite-gold.png" />
                        <span>Management</span>
                    </div>
                    <div className="sidebar-menu-picker">
                        <img src="images/favorite-gold.png" />
                        <span>Data analysis</span>
                    </div>
                    <div className="sidebar-menu-picker">
                        <img src="images/favorite-gold.png" />
                        <span>Computer technician</span>
                    </div>
                    <div className="sidebar-menu-picker-history">
                        <img src="images/clock.svg" />
                        <span>Post search 1</span>
                    </div>
                    <div className="sidebar-menu-picker-history">
                        <img src="images/clock.svg" />
                        <span>Post search 2</span>
                    </div>
                    <div className="sidebar-menu-picker-history">
                        <img src="images/clock.svg" />
                        <span>Computers and information...</span>
                    </div>
                    <div className="sidebar-menu-picker-history">
                        <img src="images/clock.svg" />
                        <span>Database Administrator</span>
                    </div>
                    <div className="sidebar-menu-picker-history">
                        <img src="images/clock.svg" />
                        <span>Computer security</span>
                    </div>
                    <div className="sidebar-menu-picker-history">
                        <img src="images/clock.svg" />
                        <span>Computer Systems Analyst</span>
                    </div>
                </div>
                <div className="sidebar-board-container">
                    <div style={{display: "flex", alignItems:"center", justifyContent:"space-between", padding: "6px 4px"}}>
                        <div className="sidebar-menu-picker text-bold">
                            <img src="images/menu-picker-board.svg" />
                            <span>My boards</span>
                        </div>
                        <div>
                            <img src="images/mini-add.svg" />
                        </div>
                    </div>
                    <div className="sidebar-board-container">
                        <div className="sidebar-menu-picker">
                            <img src="images/board-file-1.png" />
                            <span>Board 1</span>
                        </div>
                        <div className="sidebar-menu-picker">
                            <img src="images/board-file-1.png" />
                            <span>Board 2</span>
                        </div>
                        <div className="sidebar-menu-picker">
                            <img src="images/board-file-1.png" />
                            <span>Board 3</span>
                        </div>
                        <div className="sidebar-menu-picker">
                            <img src="images/board-file-2.png" />
                            <span>Board agent 1</span>
                        </div>
                        <div className="sidebar-menu-picker">
                            <img src="images/board-file-2.png" />
                            <span>Board agent 2</span>
                        </div>
                        <div className="sidebar-menu-picker">
                            <img src="images/board-file-2.png" />
                            <span>Board agent 3</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;