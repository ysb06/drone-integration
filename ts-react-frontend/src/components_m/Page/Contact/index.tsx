import React from 'react';
import './Contact.css';
import EmptyBox from '../../PageElements/EmptyBox';

const Contact: React.FC = () => {
    return (
        <main id="page-contact">
            <div className="contact-main-container">
                <div className="contact-main-text">
                    <img src="image/Logo.png" alt="Logo" />
                    <div className="contact-main-title"><h2>Human Drone Interaction</h2></div>
                    <div className="contact-main-content">
                        <p>HDI Lab은 드론을 통해 즐길 수 있는 다양한 경험을 개발하고 드론용 엑서사리을 제작하는 스타트업 기업입니다.</p>
                    </div>
                </div>
                <div className="contact-main-image">
                    <img src="image/page-contact-1.webp" alt="Lab Family" />
                </div>
            </div>
            <EmptyBox />
        </main>
    );
}

export default Contact;