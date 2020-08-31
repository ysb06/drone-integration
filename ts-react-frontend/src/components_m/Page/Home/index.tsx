import React from 'react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <main id="page-home">
            <div className="show-window">
                <div className="catchphrase-container">
                    <div className="catchphrase-title">Drone Jacket</div>
                    <div className="catchphrase-subtitle">Upgrade your drone</div>
                    <div className="video-button"><p>Watch Video ▶</p></div>
                </div>
            </div>
        </main>
    );
}

export default Home;