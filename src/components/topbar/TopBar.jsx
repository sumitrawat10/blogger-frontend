import React from 'react'
import './topbar.css'

export default function TopBar() {
    return (
        <div className='top'>
            <div className='topLeft'>
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                    <li className='topListItem'>WRITE</li>
                    <li className='topListItem'>LOGOUT</li>
                </ul>
            </div>
            <div className='topRight'>
                <img className='topImg' src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg" alt="profile" />
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
