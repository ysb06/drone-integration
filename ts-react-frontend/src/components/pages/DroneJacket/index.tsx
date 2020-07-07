import React, { Component } from 'react';
import MainMenu from '../../common/MainMenu';

import './drone-jacket.css';
import { Link, RouteComponentProps } from 'react-router-dom';

class DroneJacket extends Component<RouteComponentProps> {
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
                    </section>
                    <section>
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
                    <section>
                        {/* 와디즈 복사 */}
                        <div className="details">
                            <h2>드론의 기능을 업그레이드 해 보십시오!</h2>
                            <div className="details-image">
                                <img src="image/page-jacket-9.gif" width={720} alt="Upgrade Jackets?" /><br />
                                업그레이드 준비!
                            </div>
                            <p>
                                HDI lab이 제공하는 두 모델의 드론 재킷 DJK_Ph4과 DJK_MvPro는 
                                dji 사의 팬텀 4 드론과 매빅 Pro 드론을 저럼한 가격으로 팬텀 4 RTK 와 매빅 2 엔터프라이즈 급의 기능을 사용할 수 있도록 도와줍니다. 
                                측량용 센서, 360도 카메라나 조명기구, 소형 프로젝터 등의 액세서리도 표준 어댑터만 있다면 당신의 필요에 따라서 드론에 부착시킬 수 있습니다.
                            </p>
                            <div className="details-image">
                                <img src="image/page-jacket-10.gif" width={720} alt="Upgrade Jackets!" /><br />
                                드론 위에 액션 캠을 장착
                            </div>


                            <h2>내 드론이 눈에 확 띌 수 있는 방법은 없을까?</h2>
                            <div className="details-image">
                                <img src="image/page-jacket-6.jpg" alt="No Jackets" /><br />
                                어떤게 내 드론이지?
                            </div>
                            <p>
                                대부분의 드론은 모두 비슷한 모양과 비숫한 색상을 하고 있습니다.
                                드론에 내 이름을 써넣을 수도 없고, 이니셜이 새겨진 스티커를 붙이기도 찜찜합니다.
                                회사 로고나 타이틀을 표시하고 싶어도 방법이 없습니다.
                            </p>
                            <p>
                                집안에 드론은 하나뿐인데 가족들이 다 같은 드론으로 날리자니,
                                뭔가 심심하고 재미도 없고 개성도 없는 것이 불만이셨지요? 바꾸고 싶지는 않으세요?
                            </p>


                            <h2>드론에 화려한 컬러를 입혀보세요<br />당신의 드론이 눈에 확 띕니다</h2>
                            <div className="details-image">
                                <img src="image/page-jacket-7.jpg" alt="Yes Jackets" /><br />
                                당신의 드론, 변할 수 있습니다.
                            </div>
                            <p>
                                드론 재킷은 이런 고민을 깔끔하게 해결해 드립니다.
                                다양한 색상의 드론 재킷은 탈부착이 아주 간단하고 쉬울 뿐만 아니라 드론을 보호해줍니다.
                                드론 재킷은 여덟가지 색상(White, Black, Red, Silver, Gold)으로 자신의 개성을 표현해줍니다.
                            </p>


                            <h2>드론 재킷에 피규어 스탠드 어댑터를 붙이게 되면...</h2>
                            <div className="details-image">
                                <div className="double-image">
                                    <img src="image/page-jacket-5.jpg" alt="Jacket on the beach" />
                                    <img src="image/page-jacket-8.jpg" alt="Fullmetal Jacket" /><br />
                                </div>
                                피규어가 난다!
                            </div>
                            <p>
                                드론 재킷을 사용해서 당신이 소장하고 있는 작은 피규어를 드론 위에 태우고 날려 보세요.
                                피규어 스탠드 어댑터를 사용하면, 귀여운 피규어가 드론을 타고 나는 듯한 즐거움을 맛볼 수 있지요!
                            </p>
                        </div>
                    </section>
                    <section>
                        <div className="spec">

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