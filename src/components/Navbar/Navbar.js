import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar">
        <div className="container">
        <h1>Clicky Game</h1>
            <p className="instructions">Click on an image to earn points, but don't click on any more than once!</p>
            <span className="navbar-text">
                Score <span className="badge badge-pill badge-secondary">{props.score}</span> | Top Score <span className="badge badge-pill badge-secondary">{props.highscore}</span>
            </span>
        </div>
    </nav>
)

export default Navbar;
