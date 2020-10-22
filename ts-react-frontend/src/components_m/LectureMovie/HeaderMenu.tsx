import React from 'react';
import './HeaderMenu.css'

interface IHeaderMenuProps {
    parentPath: string,
    onMenuClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const HeaderMenu: React.FC<IHeaderMenuProps> = (props: IHeaderMenuProps) => {
    const urlFactors: string[] = props.parentPath.split('/');
    return (
        <div className="header-menu">
            <div className="header-menu-side-button-container">
                <div className="header-menu-side-button" onClick={props.onMenuClick ? props.onMenuClick : onMenuButtonClick}>
                    <img src={urlFactors[0] + "//" + urlFactors[2] + "/image/optimized/lecture-movie/Hamburger.png"} alt="Menu" />
                </div>
            </div>
            <div className="header-menu-title"><span>강의 다시보기</span></div>
        </div>
    );
}

function onMenuButtonClick(): void {
    console.log('No functions');
}

export default HeaderMenu;