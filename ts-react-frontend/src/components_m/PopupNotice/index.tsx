import React, { Fragment } from 'react';
import NewWindow from 'react-new-window';
import './PopupNotice.css';

interface IPopupNoticeProps {
    visible: boolean
}

const PopupNotice: React.FC<IPopupNoticeProps> = (props: IPopupNoticeProps) => {
    return (
        props.visible ?
            <NewWindow features={{ width: 480, height: 360 }} center='parent'>
                <div className="popup-notice">
                    <h2>공·지·사·항</h2>
                    <p>아빠와 함께 하는 꿈의 학교' 마지막 수업 보강을 12월 13일 일요일 오전 10시부터 1시까지 계획하고 있습니다.</p>
                    <p>코로나 19 상황이 더 나빠지지 않는다면 예정대로 진행하도록 할테니, 집게를 완성하지 못한 학생들은 모두 참가해 주세요.</p>
                    <p>아울러 당일 드론을 직접 날리면서 드론인형뽑기 게임도 즐길 수 있도록 준비하겠습니다.</p>
                    <p>드론 게임에 관심있는 학생과 학부모께서는 12시 이후에 참여하시면 좋겠습니다. 감사합니다.</p>
                </div>
            </NewWindow> :
            <Fragment />
    );
}

export default PopupNotice;