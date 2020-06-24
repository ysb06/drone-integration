import React, { Component } from 'react';
import MainMenu from '../../common/MainMenu';

import './drone-jacket.css';
import { Link } from 'react-router-dom';

class DroneJacket extends Component {
    render() {
        return (
            <div id="drone-jacket-page">
                <header>
                    <MainMenu />
                </header>
                <main>
                    <section>
                        <div className="headline">
                            <header><h1>Drone Jacket</h1></header>
                            <article>
                                <div className="headline-content">
                                    <div className="headline-text">
                                        <p>Drone Jacket은 드론 본체에 씌울 수 있는 스킨 커버로서 표준 나사를 통해 드론에 다양한 액서사리를 추가할 수 있고 드론을 새로운 모습으로 꾸밀 수 있습니다.</p>
                                        <Link to="/">
                                            <div className="purchase-button">
                                                <span>구매하기</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="headline-image">
                                        <img src="image/page-jacket-headline-1.jpg" alt="Red Drone Jacket" />
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* Summary 요약 파트 내용 */}
                        <div className="summary-background-b">
                            <div className="summary">
                                <div className="summary-text">
                                    <h2>당신의 드론,<br />기능을 업그레이드 할 수 있습니다</h2>
                                    <p>고정 나사를 통해 당신이 필요한 어떤 것이든 드론에 추가해 보세요</p>
                                </div>
                                <div className="summary-image">
                                    <img src="image/page-jacket-3.jpg" alt="Add-on for your drone" />
                                </div>
                            </div>
                        </div>
                        <div className="summary-background-w">
                            <div className="summary">
                                <div className="summary-image">
                                    <img src="image/page-jacket-2.jpg" alt="color your drone" />
                                </div>
                                <div className="summary-text">
                                    <h2>당신의 개성을 표현할 수 있는 <br />색상을 입혀 보세요</h2>
                                    <p>Phantom 4 용으로는 총 8종, Mavic 2용으로는 2종의 다양한 색상을 선택할 수 있습니다</p>
                                </div>
                            </div>
                        </div>
                        <div className="summary-background-g">
                            <div className="summary">
                                <div className="summary-text">
                                    <h2>좋아하는 캐릭터와 함께 <br />하늘을 날아보세요</h2>
                                    <p>당신이 가진 다양한 피규어를 장착하는 것이 가능합니다</p>
                                </div>
                                <div className="summary-image">
                                    <img src="image/page-jacket-5.jpg" alt="Add an figure on your drone" />
                                </div>
                            </div>
                        </div>
                        <div className="summary-background-w">
                            <div className="summary">
                                <div className="summary-image">
                                    <img src="image/page-jacket-4.jpg" alt="Add message on your drone" />
                                </div>
                                <div className="summary-text">
                                    <h2>당신의 드론에 <br />메시지를 새겨 넣을 수 있습니다</h2>
                                    <p>드론을 손상시키지 않고도 다양하게 꾸밀 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer>
                    <img src="image/prototype/footer.png" style={{ maxWidth: '100%', marginTop: '200px' }} alt="Main Page" />
                </footer>
            </div>
        );
    }
}

export default DroneJacket;