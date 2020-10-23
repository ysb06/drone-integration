import React, { Fragment, useState } from 'react';
import HeaderMenu from './HeaderMenu';
import './LectureMovie.css';
import SideMenu from './SideMenu';

let sideMenuVisibleState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
let videoSrcState: [string | undefined, React.Dispatch<React.SetStateAction<string | undefined>>];

//추후 YouTube Player API로 바꾸어 수정
//Related Video 관련 사용자 동작에 대한 반응을 위한 것
const LectureMovie: React.FC = () => {
    sideMenuVisibleState = useState<boolean>(false);
    videoSrcState = useState<string>();

    return (
        <div className="lecture-movie">
            <HeaderMenu onMenuClick={onMenuButtonClick} />
            <div className="lecture-movie-content">
                <SideMenu onMenuClick={onVideoSelected} visible={sideMenuVisibleState[0]}/>
                <div className="lecture-movie-video">
                    {videoSrcState[0] ?
                        <iframe
                            title="drone-jacket"
                            src={videoSrcState[0] + "?rel=0"}
                            frameBorder={0}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        : <Fragment />
                    }
                </div>
            </div>
        </div>
    );
}

function onMenuButtonClick(): void {
    if (sideMenuVisibleState[0]) {
        sideMenuVisibleState[1](false);
    } else {
        sideMenuVisibleState[1](true);
    }
}

function onVideoSelected(videoSrc: string): void {
    videoSrcState[1](videoSrc);
}

export default LectureMovie;