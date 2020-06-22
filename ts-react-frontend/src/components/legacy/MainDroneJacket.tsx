import React, { Component } from 'react';
import './MainDroneJacket.css';

class MainDroneJacket extends Component {
    render() {
        return (
            <main>
                <div id="drone-jacket">
                    <div className="temp-prototype">
                        <img src="/image/prototype/page-jacket-1.png" alt="Prototype" />
                    </div>

                    <div className="content">
                        <img src="/image/page-jacket-3.jpg" alt="재킷 이미지 3" />
                        <div className="text-content">
                            <h1>Upgrade Functionalities</h1>
                            <p>팬텀4와 매빅2에 드론 재킷을 입히면 한층 업그레이드된 기능을 구현할 수 있습니다.</p>
                            <ul>
                                <li>고프로 카메라를 얹고 360도 영상 촬영이 가능합니다.</li>
                                <li>스포트라이트 조명을 얹고 어두운 곳의 촬영이 가능합니다.</li>
                                <li>스피커나 프로젝터를 얹고 원하는 공연 효과를 낼 수 있습니다.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="content">
                        <div className="text-content">
                            <h1>Fun with Figures</h1>
                            <p>팬텀4와 매빅2에 드론 재킷을 입히면 귀여운 피규어를 얹어서 재미있게 드론을 날릴 수 있습니다.</p>
                            <ul>
                                <li>값비싼 피규어는 필요 없습니다. 일상생활용품에서도 쉽게 구할 수 있는 피규어를 드론에 태울 수 있습니다.</li>
                                <li>피규어를 드론에 태울 수 있는 전용 어댑터를 제공합니다.</li>
                            </ul>
                        </div>
                        <img src="/image/prototype/page-jacket-3.jpg" alt="재킷 이미지 1" />
                    </div>

                    <div className="content">
                        <img src="/image/page-jacket-2.jpg" alt="재킷 이미지 2" />
                        <div className="text-content">
                            <h1>Colorful Personality</h1>
                            <p>팬텀4와 매빅2에 다양한 색상의 드론 재킷을 입히면 당신의 개성을 표현할 수 있습니다.</p>
                            <ul>
                                <li>다양한 색상의 드론 재킷을 입히면 멀리서도 다른 드론과 구별이 가능합니다.</li>
                                <li>다양한 색상의 드론 재킷을 입혀서 당신의 개성을 표현하십시오.</li>
                                <li>드론에 자유자재로 표현하고 싶은 문구나 그림을 새겨 넣기 편합니다. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default MainDroneJacket;