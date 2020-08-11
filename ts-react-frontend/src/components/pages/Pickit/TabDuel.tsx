import React, { Component } from 'react';

class TabDuel extends Component {
    render() {
        return (
            <div className="duel-tab">
                <p>
                    D, Pick it Deul은 두 명이서 서로 대결할 수 있는 게임입니다. 서로 번갈아 가며 제한시간 내 누가 얼마나 인형을 많이 뽑나 경쟁해 보세요
                </p>
                <p>
                    <span style={{ fontWeight: "bold" }}>기본 룰</span><br />
                </p>
                <ol>
                    <li>총 2라운드로 진행됩니다.</li>
                    <li>첫 라운드는 3분, 마지막 라운드는 2분의 시간이 주어집니다.</li>
                    <li>한 라운드에서 선공을 잡은 플레이어는 주어진 시간 내에 Pick it Solo와 같이 드론으로 인형을 뽑아 자신의 바구니에 인형을 최대한 많이 뽑습니다.</li>
                    <li>3분의 시간이 지나면 반대쪽 플레이어도 마찬가지로 인형을 최대한 많이 가져옵니다.</li>
                    <li>다음 라운드에서도 2분의 시간 내에 마찬가지로 진행합니다.</li>
                    <li>두 라운드가 끝났을 때, 인형을 최대한 많이 가져온 플레이어가 승리합니다.</li>
                </ol>
            </div>
        );
    }
}

export default TabDuel;