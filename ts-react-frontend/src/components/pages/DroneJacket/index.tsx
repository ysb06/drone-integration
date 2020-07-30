import React, { Component } from 'react';
import MainMenu from '../../common/MainMenu';
import ButtonA from '../../common/ButtonTypeA';

import './drone-jacket.css';
import { RouteComponentProps } from 'react-router-dom';

class DroneJacket extends Component<RouteComponentProps> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.onClickFirstSummary = this.onClickFirstSummary.bind(this);
        this.onClickSecondSummary = this.onClickSecondSummary.bind(this);
        this.onClickThirdSummary = this.onClickThirdSummary.bind(this);
        this.onClickFourthSummary = this.onClickFourthSummary.bind(this);
    }
    detail_1Func: HTMLDivElement | null = null;
    detail_2Colr: HTMLDivElement | null = null;
    detail_3Figr: HTMLDivElement | null = null;
    detail_4Cstm: HTMLDivElement | null = null;

    onClickFirstSummary(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.detail_1Func?.scrollIntoView({ behavior: 'smooth' });
    }

    onClickSecondSummary(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.detail_2Colr?.scrollIntoView({ behavior: 'smooth' });
    }

    onClickThirdSummary(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.detail_3Figr?.scrollIntoView({ behavior: 'smooth' });
    }

    onClickFourthSummary(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.detail_4Cstm?.scrollIntoView({ behavior: 'smooth' });
    }

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
                                        <img src="image/page-jacket-22.png" alt="Red Drone Jacket" />
                                    </div>
                                </div>
                            </article>
                        </div>
                    </section>
                    <section>
                        {/* Summary 요약 파트 내용 */}
                        <div className="summary-background-1">
                            <div className="summary">
                                <div className="summary-text" onClick={this.onClickFirstSummary}>
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
                                    <img src="image/page-jacket-tc2.png" alt="color your drone" />
                                </div>
                                <div className="summary-text" onClick={this.onClickSecondSummary}>
                                    <h2>당신의 개성을 표현할 수 있는 <br />색상을 입혀 보세요</h2>
                                    <p>Phantom 4 용 8종, Mavic 2 용 2종의 다양한 색상을 선택할 수 있습니다</p>
                                </div>
                            </div>
                        </div>
                        <div className="summary-background-3">
                            <div className="summary">
                                <div className="summary-text" onClick={this.onClickThirdSummary}>
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
                                    <img src="image/page-jacket-tc4.png" alt="Add message on your drone" />
                                </div>
                                <div className="summary-text" onClick={this.onClickFourthSummary}>
                                    <h2>당신의 드론에 <br />메시지를 새겨 넣을 수 있습니다</h2>
                                    <p>드론을 손상시키지 않고도 다양하게 꾸밀 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="recommendation">
                            <h2>이런 분들께 꼭 추천드립니다!</h2>
                            <ul>
                                <li>나만의 드론을 멋지게 장식해서 개성있게 날리고 싶었던 분</li>
                                <li>드론에 나의 identity/personality를 표시하고 싶었던 분</li>
                                <li>드론에 회사나 기업의 로고를 표시하고 싶었던 분</li>
                                <li>드론에 액션캠이나 조명 같은 부가장치를 붙여서 기능을 향상시키고 싶었던 분</li>
                                <li>DJI 의 Phantom 4/Mavic 2 드론을 upgrade 된 기능으로 활용하고 싶었던 분</li>
                            </ul>
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
                                    이 스킨 커버의 기능적 특징은 크게 다음과 같습니다.
                                </p>
                                <ul>
                                    <li>드론 본체 위에 씌울 수 있는 커버 스킨</li>
                                    <li>¼" 표준나사를 사용하여 드론 상단에 액세서리 부착</li>
                                </ul>
                            </div>

                            <div className="details-paragraph" ref={e => this.detail_1Func = e}>
                                {/* 기능 업그레이드 */}
                                <h3>드론의 기능을 업그레이드 해 보십시오</h3>
                                <div className="details-image">
                                    <iframe title="drone-jacket" width="850" height="478" src="https://www.youtube.com/embed/d695jTaL9Nc"
                                        frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /><br />
                                </div>
                                <p>
                                    이 Drone Jacket의 가장 큰 장점은 바로 ¼" 표준나사로 이를 통해 측량용 센서, 360도 카메라나 조명기구, 소형 프로젝터
                                    등 다양한 액세서리를 결합시킬 수 있다는 점입니다.
                                    예를 들어, 위와 같이 Phantom 4 드론에 360 카메라를 장착하여 멋진 파노라마 영상을 촬영하거나,
                                    아래와 같이 드론 위에 스포트라이트를 장착하여 특정 부분을 더 밝게 촬영할 수 있습니다.
                                </p>
                                <div className="details-image">
                                    <img src="image/page-jacket-12.png" alt="Upgrade Jackets?" /><br />
                                    <iframe title="drone-jacket" width="850" height="478" src="https://www.youtube.com/embed/-RS3X2CXXZs"
                                        frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /><br />
                                    드론에 스포트라이트를 장착
                                </div>
                            </div>

                            <div className="details-paragraph" ref={e => this.detail_2Colr = e}>
                                {/* 색상 변경 */}
                                <h3>당신의 드론을 컬러풀하게...</h3>
                                <div className="details-image">
                                    <img src="image/page-jacket-14.gif" width={850} alt="Upgrade Jackets?" /><br />
                                    다양한 색상의 Drone Jacket이 당신을 위해 준비되어 있습니다<br />
                                </div>
                                <p>
                                    다양한 색상의 Drone Jacket이 준비되어 있어 원하는대로 드론의 색상을 변경할 수 있습니다.<br />
                                    DJI Phantom 4 용 5종, DJI  Mavic 2 용 2종의 색상 중 당신이 원하는 색을 선택하여 드론을 새롭게 변화시키세요<br />
                                </p>
                                <div className="details-image">
                                    <img src="image/page-jacket-24.png" alt="Upgrade Jackets?" /><br />
                                    Phantom 4 용 Drone Jacket 색상 종류<br />
                                </div>
                                <div className="details-image">
                                    <img src="image/page-jacket-25.png" alt="Upgrade Jackets?" /><br />
                                    Mavic 2 용 Drone Jacket 색상 종류<br />
                                </div>
                            </div>

                            <div className="details-paragraph" ref={e => this.detail_3Figr = e}>
                                {/* 피규어 장착 */}
                                <h3>주변 일상용품을 드론 피규어로...</h3>
                                <div className="details-image">
                                    <img src="image/page-jacket-16.jpg" width={850} alt="Upgrade Jackets?" /><br />
                                    Figure on the drone<br />
                                </div>
                                <div className="details-image">
                                    <iframe title="drone-jacket" width="850" height="478" src="https://www.youtube.com/embed/lr7qq3vT05U"
                                        frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /><br />
                                </div>
                                <p>
                                    피규어 스탠드 어댑터를 사용하면 작은 피규어들을 드론에 태울 수 있습니다.
                                    귀여운 피규어가 하늘을 나는 모습을 보면서 같이 하늘을 나는 듯한 즐거움을 만끽하세요. <br />
                                    <br />
                                    피규어 어댑터는 대형과 소형 두 종류가 있으며 ¼" 표준나사를 통해 드론에 고정할 수 있습니다.
                                </p>
                                <div className="details-image">
                                    <img src="image/page-jacket-18.png" width={850} alt="Upgrade Jackets?" /><br />
                                    피규어 어댑터<br />
                                </div>
                            </div>

                            <div className="details-paragraph" ref={e => this.detail_4Cstm = e}>
                                {/* 커스터마이징 */}
                                <h3>당신의 개성을 드론에 원하는대로 반영할 수 있습니다</h3>
                                <div className="details-image">
                                    <img src="image/page-jacket-23.jpg" alt="Upgrade Jackets?" /><br />
                                    <img src="image/page-jacket-19.jpg" alt="Upgrade Jackets?" /><br />
                                    Jacket위에 자유로운 커스터마이징
                                </div>
                                <p>
                                    Drone Jacket을 사용하면 드론 본체를 더럽히지 않고 자유롭게 스티커를 붙이거나 글자를 새길 수 있습니다.
                                    Drone Jacket의 가장 큰 특징은 탈부착이 쉽고 드론에 손상을 주지 않는다는 점이 특징입니다.
                                    때문에, 서로 다른 Drone Jacket에 원하는 대로 커스터마이징한 후 마음에 드는 대로 교체할 수 있습니다.
                                </p>
                            </div>

                        </div>
                    </section>
                    <section>
                        <div className="spec">
                            <h2>Drone Jacket 상세 정보</h2>
                            <h3>드론 재킷 Ph4 (DJI Phantom 4 용)</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="title-column-ph4">제품 소재</td>
                                        <td className="content-column">폴리 카보네이트</td>
                                        <td className="image-column" rowSpan={4}><img src="image/page-jacket-21.png" alt="Jacket" /></td>
                                    </tr>
                                    <tr>
                                        <td className="title-column-ph4">규격</td>
                                        <td className="content-column">20 X 20 X 6 cm</td>
                                    </tr>
                                    <tr>
                                        <td className="title-column-ph4">무게</td>
                                        <td className="content-column">64g (나사를 결합 시 72g)</td>
                                    </tr>
                                    <tr>
                                        <td className="title-column-ph4">색상</td>
                                        <td className="content-column">white, black, red, gold, silver (5종)</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h3>드론 재킷 Mv2 (DJI Mavic 2 용)</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="title-column-mv2">제품 소재</td>
                                        <td className="content-column">폴리 카보네이트</td>
                                        <td className="image-column" rowSpan={4}><img src="image/page-jacket-20.jpg" alt="Jacket" /></td>
                                    </tr>
                                    <tr>
                                        <td className="title-column-mv2">규격</td>
                                        <td className="content-column">10 X 10 X 6 cm</td>
                                    </tr>
                                    <tr>
                                        <td className="title-column-mv2">무게</td>
                                        <td className="content-column">48g (나사 결합 시 56g)</td>
                                    </tr>
                                    <tr>
                                        <td className="title-column-mv2">색상</td>
                                        <td className="content-column">white, red (2종)</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="spec-warning">
                                <p>
                                    ※주의: 드론 재킷 상단에 부착된 나사를 활용하여 100g 이상의 무거운 부가장치를 부착하면
                                    드론의 비행에 부정적인 영향을 미쳐서 비행 도중에 중심을 잃고 추락할 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="price-guide">
                            <h2>Drone Jacket</h2>
                            <h3>Upgrade your drone</h3>
                            {/*
                            <div className="price-guide-container">
                                <div className="price-guide-content">
                                    <div className="price-guide-img">
                                        <img src="image/page-jacket-21.png" alt="Jacket" />
                                    </div>
                                    <p>DJK Ph4 (Phantom 4용) <span style={{ fontWeight: "bold" }}>33,000</span>원</p>
                                </div>
                                <div className="price-guide-content">
                                    <div className="price-guide-img">
                                        <img src="image/page-jacket-20.jpg" alt="Jacket" />
                                    </div>
                                    <p>DJK Mv2 (Mavic 2용) <span style={{ fontWeight: "bold" }}>22,000</span>원</p>
                                </div>
                            </div>
                            */}
                            <div className="price-guide-button">
                                <ButtonA text="구매하기" />
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