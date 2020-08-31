import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SideMenuButton from './SideMenuButton';

import './SiteMenu.css';
import LoginButton from './LoginButton';
import SideNavigation from './SideNavigation';

const SiteMenu: React.FC = () => {
    const [sideMenu, setSideMenu] = useState<Boolean>(false);

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
                <LoginButton />
                <SideMenuButton onButtonClick={() => { setSideMenu(!sideMenu); }} />
            </div>
            {sideMenu ? <SideNavigation onClose={() => { setSideMenu(!sideMenu); }} /> : <Fragment />}
        </div>
    );
}

export default SiteMenu;