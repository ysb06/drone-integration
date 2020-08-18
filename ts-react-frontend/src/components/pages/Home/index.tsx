import React, { Component } from 'react';

import MainMenu from '../../common/MainMenu';

import './home.css';
import { Link } from 'react-router-dom';

interface HomeProps { }
interface HomeState {
    isVideoActivated: boolean
}

class Home extends Component<HomeProps, HomeState> {
    state = {
        isVideoActivated: false
    }

    onClickVideoButton(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.setState({ isVideoActivated: true });
    }

    onClickVideoExitButton(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.setState({ isVideoActivated: false });
    }

    onItemClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div id="main-page">
                <header>
                    <MainMenu />
                </header>
                <main>
                    {this.state.isVideoActivated ? this.Video_Element : <div />}
                    <div className="show-window">
                        <div className="catchphrase-container">
                            <div className="catchphrase-title">Drone Jacket</div>
                            <div className="catchphrase-subtitle">Upgrade your drone</div>
                            <div className="video-button" onClick={this.onClickVideoButton.bind(this)}><p>Watch Video ▶</p></div>
                        </div>
                    </div>
                    <div className="representative-goods">
                        <h1>대표 제품</h1>
                        <div className="representative-items-container">
                            <Link to="/drone-jacket" onClick={this.onItemClick}>
                                <div className="representative-item">
                                    <img src="image/optimized/main/page-main-2.png" alt="Drone Jacket" /><br />
                                    <p>Drone Jacket</p>
                                </div>
                            </Link>
                            <Link to="/pick-it" onClick={this.onItemClick}>
                            <div className="representative-item">
                                <img src="image/raw/main/page-main-3.gif" alt="Pick it" /><br />
                                <p>Pick it!</p>
                            </div>
                            </Link>
                            <Link to="/dronia-edu" onClick={this.onItemClick}>
                            <div className="representative-item" style={{backgroundColor: "white"}}>
                                <img src="image/optimized/main/page-main-4.png" alt="Dronia Edu" /><br />
                                <p>Dronia Edu</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                </main>
                <footer>
                    <img src="image/prototype/footer.png" style={{ maxWidth: '100%', marginTop: '200px' }} alt="Main Page" />
                </footer>
            </div>
        );
    }

    Video_Element: JSX.Element =
        <div className="video-player" onClick={this.onClickVideoExitButton.bind(this)}>
            <iframe title="drone-jacket" width="1280" height="720" src="https://www.youtube.com/embed/5o-l5vjOavA?amp;autoplay=1" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>;
}

// eslint-disable-next-line
const Video_Element_Test: JSX.Element =
    <div className="video-player">
        <video controls className="video-content" src="video/page-main-video-1.mp4" autoPlay={true} />
    </div>;

export default Home;