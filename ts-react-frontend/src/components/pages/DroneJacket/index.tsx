import React, { Component } from 'react';
import MainMenu from '../../common/MainMenu';
import ButtonA from '../../common/ButtonTypeA';

import './drone-jacket.css';
import { RouteComponentProps } from 'react-router-dom';

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
                                        <div className="button-container"><ButtonA text="구매하기" /></div>
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
                        <div className="summary-background-1">
                            <div className="summary">
                                <div className="summary-text">
                                    <h2>당신의 드론,<br />기능을 업그레이드 할 수 있습니다</h2>
                                    <p>고정 나사를 통해 당신이 필요한 어떤 것이든 드론에 추가해 보세요</p>
                                </div>
                                <div className="summary-image">
                                    <img src="image/page-jacket-tc1.png" alt="Add-on for your drone" />
                                </div>
                            </div>
                        </div>
                        <div className="summary-background-2">
                            <div className="summary">
                                <div className="summary-image">
                                    <img src="image/page-jacket-tc2.jpg" alt="color your drone" />
                                </div>
                                <div className="summary-text">
                                    <h2>당신의 개성을 표현할 수 있는 <br />색상을 입혀 보세요</h2>
                                    <p>Phantom 4 용으로는 총 8종, Mavic 2용으로는 2종의 다양한 색상을 선택할 수 있습니다</p>
                                </div>
                            </div>
                        </div>
                        <div className="summary-background-3">
                            <div className="summary">
                                <div className="summary-text">
                                    <h2>좋아하는 캐릭터와 함께 <br />하늘을 날아보세요</h2>
                                    <p>당신이 가진 다양한 피규어를 장착하는 것이 가능합니다</p>
                                </div>
                                <div className="summary-image">
                                    <img src="image/page-jacket-tc3.jpg" alt="Add an figure on your drone" />
                                </div>
                            </div>
                        </div>
                        <div className="summary-background-1">
                            <div className="summary">
                                <div className="summary-image">
                                    <img src="image/page-jacket-tc4.jpg" alt="Add message on your drone" />
                                </div>
                                <div className="summary-text">
                                    <h2>당신의 드론에 <br />메시지를 새겨 넣을 수 있습니다</h2>
                                    <p>드론을 손상시키지 않고도 다양하게 꾸밀 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="recommendation">
                            <h2>이런 분들께 꼭 추천드립니다!</h2>
                            <p>
                                <ul>
                                    <li>나만의 드론을 멋지게 장식해서 개성있게 날리고 싶었던 분</li>
                                    <li>드론에 나의 identity/personality를 표시하고 싶었던 분</li>
                                    <li>드론에 회사나 기업의 로고를 표시하고 싶었던 분</li>
                                    <li>드론에 액션캠이나 조명 같은 부가장치를 붙여서 기능을 향상시키고 싶었던 분</li>
                                    <li>DJI 의 Phantom 4/Mavic 2 드론을 upgrade 된 기능으로 활용하고 싶었던 분</li>
                                </ul>
                            </p>
                        </div>
                    </section>
                    <section>
                        {/* 와디즈 복사 */}
                        <div className="details">
                            <h2>제품 이야기</h2>
                            <div className="details-paragraph">
                                {/* 대상(소비자)가 가진 문제점 */}
                                <h3>당신의 드론에게 부족한 것!</h3>
                                <div className="details-image">
                                    <img src="image/page-jacket-6.jpg" alt="Upgrade Jackets?" /><br />
                                매번 똑같은 드론에는 결국 질릴 수 밖에 없습니다.
                                </div>
                                <p>
                                    처음 드론을 날려보면 당신이 조정하는대로 움직이고 촬영도 하고 한동안 재미있지만 똑같은 드론에 곧 흥미가 점점 떨어질 수 밖에 없습니다.
                                    새로운 드론을 사는 것은 한 가지 방법이겠지만 비싼 드론을 매번 사는 것도 힘들고 드론을 보관할 장소를 마련하는 것도 어려운 문제입니다.
                                    게다가 드론을 날리다 보면 몇몇 기능이 아쉬운 경우가 종종 있는데 이를 만족시킬 수 있는 드론이 없거나 굉장히 비싼 모델에만 있는 경우가 대부분입니다.
                                </p>
                            </div>

                            <div className="details-paragraph">
                                {/* Drone Jacket의 특징/장점 */}
                                <h3>DJI 드론 오너에게 꼭 필요한 필수 액세사리</h3>
                                <div className="details-image">
                                    <img src="image/page-jacket-3.jpg" alt="Upgrade Jackets?" /><br />
                                당신의 드론 이렇게 달라질 수 있습니다
                                </div>
                                <p>
                                    저희 HDI Lab.에서는 저렴한 가격에 당신의 드론을 변화시켜 줄 수 있는 스킨 커버를 판매하고 있습니다.
                                    <span style={{ fontWeight: "bold" }}> DJI Phantom 4</span>와 <span style={{ fontWeight: "bold" }}>Mavic 2</span> 두 가지 모델에 장착 가능한 커버를 각각 선택해서 구입 할 수 있습니다.
                                    이 스킨 커버의 특징은 다음과 같습니다.
                                    <ul>
                                        <li>드론 본체 위에 씌울 수 있는 커버 스킨</li>
                                        <li>¼" 표준나사를 사용하여 드론 상단에 액세서리 부착</li>
                                    </ul>
                                </p>
                            </div>

                            <div className="details-paragraph">
                                {/* 기능 업그레이드 */}
                                <h3>드론의 기능을 업그레이드 해 보십시오</h3>
                                <div className="details-image">
                                    <img src="image/page-jacket-10.gif" width={850} alt="Upgrade Jackets?" /><br />
                                    드론 위에 액션 캠을 장착
                                </div>
                                <p>
                                    이 Drone Jacket의 가장 큰 장점은 바로 ¼" 표준나사로 이를 통해 측량용 센서, 360도 카메라나 조명기구, 소형 프로젝터
                                    등 다양한 액세서리를 결합시킬 수 있다는 점입니다.
                                    예를 들어, 아래와 같이 Phantom 4 드론에 360 카메라를 장착하여 멋진 파노라마 영상을 촬영하거나
                                    스포트라이트를 장착하여 더 특정 부분을 더 밝게 촬영할 수 있습니다.
                                </p>
                                <div className="details-image">
                                    <iframe title="drone-jacket" width="850" height="478" src="https://www.youtube.com/embed/5o-l5vjOavA" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /><br />
                                    <img src="image/page-jacket-12.png" alt="Upgrade Jackets?" /><br />
                                    <img src="image/page-jacket-13.gif" width={850} alt="Upgrade Jackets?" /><br />
                                    드론에 스포트라이트를 장착
                                </div>
                            </div>

                            <div className="details-paragraph">
                                {/* 심미적 기능 */}
                                <h3>No title</h3>
                                <div className="details-image">
                                    <img src="image/page-jacket-10.gif" width={850} alt="Upgrade Jackets?" /><br />
                                    드론 위에 액션 캠을 장착
                                </div>
                                <p>
                                    No content
                                </p>
                            </div>
                            <p> .</p>
                            <p> .</p>
                            <p> .</p>
                            <p> .</p>
                            <p> .</p>
                            <p> .</p>
                            <p> .</p>






                            <h3>내 드론이 눈에 확 띌 수 있는 방법은 없을까?</h3>
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


                            <h3>드론에 화려한 컬러를 입혀보세요<br />당신의 드론이 눈에 확 띕니다</h3>
                            <div className="details-image">
                                <img src="image/page-jacket-7.jpg" alt="Yes Jackets" /><br />
                                당신의 드론, 변할 수 있습니다.
                            </div>
                            <p>
                                드론 재킷은 이런 고민을 깔끔하게 해결해 드립니다.
                                다양한 색상의 드론 재킷은 탈부착이 아주 간단하고 쉬울 뿐만 아니라 드론을 보호해줍니다.
                                드론 재킷은 여덟가지 색상(White, Black, Red, Silver, Gold)으로 자신의 개성을 표현해줍니다.
                            </p>


                            <h3>드론 재킷에 피규어 스탠드 어댑터를 붙이게 되면...</h3>
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
                            <h2>Drone Jacket 상세 정보</h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="title-column">모델명</td>
                                        <td className="content-column">드론 재킷 Ph4</td>
                                    </tr>
                                    <tr>
                                        <td className="title-column">제품 소재</td>
                                        <td className="content-column">폴리 카보네이트</td>
                                    </tr>
                                    <tr>
                                        <td className="title-column">규격</td>
                                        <td className="content-column">20 X 20 X 6 cm (DJK Ph4) / 10 X 10 X 6 cm (DJK Mv2)</td>
                                    </tr>
                                    <tr>
                                        <td className="title-column">무게</td>
                                        <td className="content-column">64 g(Ph4 나사를 결합 시 72 g)/ 48 g(Mv2 나사 결합 시 56 g)</td>
                                    </tr>
                                    <tr>
                                        <td className="title-column">색상</td>
                                        <td className="content-column">Ph4: white, black, red, gold, silver (5종) / Mv2: white, red (2종)</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="spec-warning">
                                <p><span style={{ fontWeight: "bold" }}>주의 사항</span></p>
                                <p>
                                    드론 재킷 상단에 부착된 나사를 활용하여 100g 이상의 무거운 부가장치를 부착하면
                                    드론의 비행에 부정적인 영향을 미쳐서 비행 도중에 중심을 잃고 추락할 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="price-guide">
                            <h2>Drone Jacket</h2>
                            <h3>Upgrade your drone</h3>
                            <div className="price-guide-img">
                                <img src="image/page-jacket-11.jpg" alt="Jacket" />
                            </div>
                            <p>DJK Ph4 (Phantom 4용) <span style={{ fontWeight: "bold" }}>33,000</span>원</p>
                            <p>DJK Mv2 (Mavic 2용) <span style={{ fontWeight: "bold" }}>22,000</span>원</p>
                            <p></p><p></p><p></p>
                            <ButtonA text="구매하기"/>
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