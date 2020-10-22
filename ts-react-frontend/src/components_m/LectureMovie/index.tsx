import React, { useState } from 'react';
import HeaderMenu from './HeaderMenu';
import './LectureMovie.css';

let setSideMenuVisibleState: React.Dispatch<React.SetStateAction<boolean>>;

const LectureMovie: React.FC = () => {
    const [sideMenuVisible, setSideMenuVisible] = useState<boolean>(false);
    setSideMenuVisibleState = setSideMenuVisible;

    return (
        <div className="lecture-movie">
            <HeaderMenu parentPath={window.location.href} onMenuClick={onMenuButtonClick} />
            <div>{sideMenuVisible? "OK" : "False"}</div>    
            {
                //해당 부분 삭제하고 사이드 메뉴와 유튜브 보여주기
            }
        </div>
    );
}

function onMenuButtonClick(): void {
    setSideMenuVisibleState(true);
}

export default LectureMovie;