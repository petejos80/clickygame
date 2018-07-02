import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar">
        <div className="container">
        <h1>Clicky Game</h1>
            <span className="navbar-text">
                Score <span className="badge badge-pill badge-secondary">{props.score}</span> | Top Score <span className="badge badge-pill badge-secondary">{props.highscore}</span>
            </span>
        </div>
    </nav>
)

export default Navbar;
