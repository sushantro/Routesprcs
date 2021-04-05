import React from 'react'
import {  Link} from "react-router-dom";
import '../App.css';



const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="logo">
                techmovieapp
            </div>
            <div className="menues">
                <ul className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Contact'>Contact</Link></li>
                    <li><Link to='/watchlist'>watchlist</Link></li>
                </ul>
            </div>

            
        </div>
    )
}

export default Navbar

 
