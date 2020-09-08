import React from 'react';

const TabSolo: React.FC = () => {
    return (
        <div className="solo-tab">
            <p>
                D, Pick it Solo는 혼자서 즐길 수 있는 인형뽑기 게임입니다. 자유롭게 드론을 조종하고 당신이 원하는 인형을 뽑아보세요!
                </p>
            <ol className="solo-group">
                <div className="solo-group-element">
                    <img src="image/page-pickit-3-1.png" alt="How to pick it 1" />
                    <div className="solo-group-element-text">
                        <div>①</div>
                        <li>드론을 띄웁니다</li>
                    </div>
                </div>
                <div className="solo-group-element">
                    <img src="image/page-pickit-3-2.png" alt="How to pick it 2" />
                    <div className="solo-group-element-text">
                        <div>②</div>
                        <li>드론을 원하는 인형 위로 움직입니다</li>
                    </div>
                </div>
                <div className="solo-group-element">
                    <img src="image/page-pickit-3-3.png" alt="How to pick it 3" />
                    <div className="solo-group-element-text">
                        <div>③</div>
                        <li>집게를 내려서 원하는 인형을 들어 올립니다</li>
                    </div>
                </div>
                <div className="solo-group-element">
                    <img src="image/page-pickit-3-4.png" alt="How to pick it 4" />
                    <div className="solo-group-element-text">
                        <div>④</div>
                        <li>친구가 들고 있는 뜰채로 인형을 받습니다</li>
                    </div>
                </div>
            </ol>
        </div>
    );
}

export default TabSolo;