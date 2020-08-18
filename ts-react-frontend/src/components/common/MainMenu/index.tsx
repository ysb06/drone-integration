import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './main-menu.css';

class MainMenu extends Component {
    onItemClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="main-menu">
                <div className="logo"><Link to="/"><img src="image/Logo.png" alt="HDI Logo" /></Link></div>
                <nav>
                    <div className="menu-list">
                        <ul>
                            <li><Link to="/drone-jacket" onClick={this.onItemClick}>Drone Jacket</Link></li>
                            <li><Link to="/pick-it" onClick={this.onItemClick}>D, Pick it!</Link></li>
                            <li><Link to="/dronia-edu" onClick={this.onItemClick}>Dronia Edu</Link></li>
                            <li><Link to="/contact" onClick={this.onItemClick}>Contact Us</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="login-section">
                    <div className="login-button" style={{color: "black"}}>
                        Login
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;