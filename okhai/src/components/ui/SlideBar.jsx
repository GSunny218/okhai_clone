import React from 'react';
import '../../global.css';
import './sidebar.css';

const SlideBar = () => {
    return (
        <>
            <label htmlFor="sidebarToggle">
                <input type="checkbox" name="sidebarToggle" id="sidebarToggle" />
                <div className='toggle'>
                    <span className="top_line common"></span>
                    <span className="middle_line common"></span>
                    <span className="bottom_line common"></span>
                </div>
                <div className='slide'>
                    <h1>Menu</h1>
                    <ul>
                        <li><a href=""><i>Dashboard</i></a></li>
                        <li><a href=""><i>Profile</i></a></li>
                        <li><a href=""><i>Trending</i></a></li>
                        <li><a href=""><i>Messages</i></a></li>
                        <li><a href=""><i>File Manager</i></a></li>
                        <li><a href=""><i>Portfolio</i></a></li>
                        <li><a href=""><i>Saved</i></a></li>
                        <li><a href=""><i>Setting</i></a></li>
                    </ul>
                </div>
            </label>
        </>
    );
}

export default SlideBar;