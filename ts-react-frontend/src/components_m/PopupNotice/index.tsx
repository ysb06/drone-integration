import React, { Fragment } from 'react';
import NewWindow from 'react-new-window';
import './PopupNotice.css';

interface IPopupNoticeProps {
    visible: boolean
}

const PopupNotice: React.FC<IPopupNoticeProps> = (props: IPopupNoticeProps) => {
    return (
        props.visible ?
            <NewWindow features={{ width: 480, height: 360 }} center='parent' onBlock={showNoticeAlert}>
                <div className="popup-notice">
                    <h2>공·지·사·항</h2>
                    <p>코로나로 인한 거리두기 2.5단계 격상으로 인해 
                        예정된 "아빠와 함께 하는 꿈의 학교" 마지막 수업 보강은 잠정 연기되었습니다.</p>
                    <p>추후 거리두기 단계가 낮아질 경우 보강에 대해서 다시 공지드리겠습니다.</p>
                    <p>감사합니다.</p>
                </div>
            </NewWindow> :
            <Fragment />
    );
}

function showNoticeAlert() {
    alert('공지사항\n\n' +
        '코로나로 인한 거리두기 2.5단계 격상으로 인해 예정된 "아빠와 함께 하는 꿈의 학교" 마지막 수업 보강은 잠정 연기되었습니다.\n\n' +
        '추후 거리두기 단계가 낮아질 경우 보강에 대해서 다시 공지드리겠습니다.\n\n' +
        '감사합니다.'
    );
}

export default PopupNotice;