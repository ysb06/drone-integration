import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './main-menu.css';

class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu">
                <div className="logo"><img src="image/Logo.png" alt="HDI Logo" /></div>
                <nav>
                    <div className="menu-list">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/drone-jacket">Drone Jacket</Link></li>
                            <li>Pick it!</li>
                            <li>Dronia Edu</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </nav>
                <div className="login-section">
                    <div className="login-button">
                        Login
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;