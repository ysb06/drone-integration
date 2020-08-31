import React from 'react';
import './SideMenuButton.css'

interface ISideMenuButtonProps {
    onButtonClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const SideMenuButton: React.FC<ISideMenuButtonProps> = (props) => {
    return (
        <div className="site-menu-button-container">
            <div className="site-menu-button" onClick={props.onButtonClick}>
                <img src="image/optimized/hamburger.png" alt="menu"/>
            </div>
        </div>
    );
}

export default SideMenuButton;