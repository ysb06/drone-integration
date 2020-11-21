import React from 'react';
import { NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps';
import './Contact.css';
import EmptyBox from '../../PageElements/EmptyBox';

const Contact: React.FC = () => {
    return (
        <RenderAfterNavermapsLoaded ncpClientId="uhi6mxhgo4" error={<div>에러</div>} loading={<div>로딩 중</div>}>
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
                <div className="contact-address-container">
                    <h2>찾아오는 길</h2>
                    <NaverMap
                        id="contact-map"
                        center={{
                            lat: 37.2948995,
                            lng: 126.9774249
                        }}
                    />
                </div>
                <EmptyBox />
            </main>
        </RenderAfterNavermapsLoaded>
    );
}

export default Contact;