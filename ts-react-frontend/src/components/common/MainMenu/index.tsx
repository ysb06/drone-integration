import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './main-menu.css';

class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu">
                <div className="logo"><Link to="/"><img src="image/Logo.png" alt="HDI Logo" /></Link></div>
                <nav>
                    <div className="menu-list">
                        <ul>
                            <li><Link to="/drone-jacket">Drone Jacket</Link></li>
                            <li><Link to="/pick-it">Pick it!</Link></li>
                            <li><Link to="/dronia-edu">Dronia Edu</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="login-section">
                    <div className="login-button">
                        {/*Login*/}
                    </div>
                </div>
            </div>
        );
    }
}

export default MainMenu;