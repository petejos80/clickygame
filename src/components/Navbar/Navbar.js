import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-light bg-light mb-3">
        <div className="container">
            <span className="navbar-brand mb-0 h1">Clicky Memory Game</span>
            <span className="navbar-text">
                Score <span className="badge badge-pill badge-secondary">{props.score}</span> | Top Score <span className="badge badge-pill badge-secondary">{props.score}</span>
            </span>
        </div>
    </nav>
)

export default Navbar;