import React from "react";
import {NavLink} from "react-router-dom";
function Navbar()
{
    return(
        <>
            <ul className="nav bg-muted">
             <li className="nav-item">
                    <NavLink className="nav-link" style={{color:"brown"}} to="/">Spicy</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" style={{color:"yellow"}} to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" style={{color:"yellow"}} to="/contact">Contact</NavLink>
                </li>
            </ul>
            <br/><br/>
        </>
    );
}

export default Navbar;