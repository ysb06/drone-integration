import React from 'react';
import { Link } from 'react-router-dom';
import './SideNavigation.css';

interface ISideNavigationProps {
    onClose: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const SideNavigation: React.FC<ISideNavigationProps> = (props) => {
    return (
        <div className="side-navigation" onClick={props.onClose}>
            <nav className="side-navigation-container">
                <ul>
                    <li><Link to="/drone-jacket">Drone Jacket</Link></li>
                    <li><Link to="/pick-it">D, Pick it!</Link></li>
                    <li><Link to="/dronia-edu">Dronia Edu</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default SideNavigation;