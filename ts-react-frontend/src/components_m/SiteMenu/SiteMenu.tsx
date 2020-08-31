import React from 'react';
import { Link } from 'react-router-dom';
import SiteMenuButton from './SiteMenuButton';

import './SiteMenu.css';

const SiteMenu: React.FC = () => {
    return (
        <div className="site-menu">
            <div className="site-menu-logo"><Link to="/"><img src="image/Logo.png" alt="HDI Logo" /></Link></div>
            <nav className="site-menu-list">
                <ul>
                    <li><Link to="/drone-jacket">Drone Jacket</Link></li>
                    <li><Link to="/pick-it">D, Pick it!</Link></li>
                    <li><Link to="/dronia-edu">Dronia Edu</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="site-menu-function">
                <div className="site-menu-login">

                </div>
                <SiteMenuButton />
            </div>
        </div>
    );
}

export default SiteMenu;