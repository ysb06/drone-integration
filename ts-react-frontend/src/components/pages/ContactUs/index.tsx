import React, { Component } from 'react';
import MainMenu from '../../common/MainMenu';

import './contact-us.css';

class ContactUs extends Component {
    render() {
        return (
            <div className="contact-app">
                <header>
                    <MainMenu />
                </header>
                <main>
                    <div className="page-element">
                        <div className="contact-container">
                            <div className="text">
                                <img src="image/Logo.png" alt="Logo"/>
                                <div className="summary-title"><h2>Human Drone Interaction</h2></div>
                                <div className="summary-content">
                                    <p>우리는 드론을 통해 즐길 수 있는 다양한 서비스를 개발하고 제품을 제작하는 스타트업 기업입니다.</p>
                                </div>
                            </div>
                            <div>
                                <img src="image/page-contact-1.webp" alt="Lab Family" />
                            </div>
                        </div>

                    </div>
                </main>
                <footer>
                    <img src="image/prototype/footer.png" style={{ maxWidth: '100%', marginTop: '200px' }} alt="Main Page" />
                </footer>
            </div>
        );
    }
}

export default ContactUs;