import React, { Component } from 'react';

class TabSolo extends Component {
    render() {
        return (
            <div className="solo-tab">
                <p>
                    D, Pick it Solo는 혼자서 즐길 수 있는 인형뽑기 게임입니다. 자유롭게 드론을 조종하고 당신이 원하는 인형을 뽑아보세요!
                </p>
                <div className="element-group">
                    <div className="element">
                        <img src="image/page-pickit-3-1.png" alt="How to pick it 1" />
                        <p>드론을 띄웁니다</p>
                    </div>
                    <div className="element">
                        <img src="image/page-pickit-3-2.png" alt="How to pick it 2" />
                        <p>드론을 원하는 인형 위로 움직입니다</p>
                    </div>
                    <div className="element">
                        <img src="image/page-pickit-3-3.png" alt="How to pick it 3" />
                        <p>집게를 내려서 원하는 인형을 들어 올립니다</p>
                    </div>
                    <div className="element">
                        <img src="image/page-pickit-3-4.png" alt="How to pick it 4" />
                        <p>동료가 들고 있는 뜰채로 인형을 받습니다</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabSolo;