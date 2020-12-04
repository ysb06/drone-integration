import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Popup from '../../PopupNotice';
import './Home.css';

const Home: React.FC = () => {
    const [videoVisible, setVideoVisible] = useState<boolean>(false);

    return (
        <main id="page-home">
            {videoVisible ?
                <div className="video-player" onClick={() => { setVideoVisible(false) }}>
                    <iframe title="drone-jacket" src="https://www.youtube.com/embed/5o-l5vjOavA?rel=0&autoplay=1" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                : <Fragment />
            }
            <div className="show-window">
                <div className="catchphrase-container">
                    <h1 className="catchphrase-title">Drone Jacket</h1>
                    <div className="catchphrase-subtitle">Upgrade your drone</div>
                    <div className="video-button" onClick={() => { setVideoVisible(true) }}><p>Watch Video ▶</p></div>
                </div>
            </div>
            <div className="representative-goods">
                <span className="representative-goods-title">대표 제품</span>
                <div className="representative-items-container">
                    <Link to="/drone-jacket" onClick={() => { window.scrollTo(0, 0) }}>
                        <div className="representative-item">
                            <img src="image/optimized/main/page-main-2.png" alt="Drone Jacket" /><br />
                            <p>Drone Jacket</p>
                        </div>
                    </Link>
                    <Link to="/pick-it" onClick={() => { window.scrollTo(0, 0) }}>
                        <div className="representative-item">
                            <img src="image/page-main-3.gif" alt="Pick it" /><br />
                            <p>Pick it!</p>
                        </div>
                    </Link>
                    <Link to="/dronia-edu" onClick={() => { window.scrollTo(0, 0) }}>
                        <div className="representative-item">
                            <img src="image/optimized/main/page-main-4.png" alt="Dronia Edu" /><br />
                            <p>Dronia Edu</p>
                        </div>
                    </Link>
                </div>
            </div>
            <Popup visible={true}/>
        </main>
    );
}

export default Home;