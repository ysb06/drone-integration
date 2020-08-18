import '../../common/PageElement/page.css'; //추후 통합 페이지에서 import, 여기에선 삭제

import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MainMenu from '../../common/MainMenu';
import Title from '../../common/PageElement/Title';
import Summary from '../../common/PageElement/Summary';
import FeatureElement, { FeatureStyleColor, FeatureStyleForm } from '../../common/PageElement/FeatureElement';
import Story from './Story';
import SpecTable from '../../common/PageElement/SpecTable';
import SummarySimple from '../../common/PageElement/SummarySimple';

class DroneJacket_2 extends Component<RouteComponentProps> {
    render() {
        return (
            <div id="drone-jacket-page">
                <header>
                    <MainMenu />
                </header>
                <main>
                    <Title mainTitleText="Drone Jacket" subTitleText="Upgrade your drone" />
                    <section>
                        <Summary
                            content="Drone Jacket은 드론 본체에 씌울 수 있는 스킨 커버로서 표준 나사를 통해 드론에 다양한 액서사리를 추가할 수 있고 드론을 새로운 모습으로 꾸밀 수 있습니다."
                            pictureSrc="image/optimized/drone-jacket/page-jacket-1.png"
                            buttonText="구매하러 가기"
                            linkTo="https://www.wadiz.kr/web/campaign/detail/72456?utm_source=wadizshare_in&utm_medium=url"
                        />
                    </section>
                    <section>
                        <FeatureElement
                            title="당신의 드론, 기능을 업그레이드 할 수 있습니다"
                            content="드론이 낯선 사람도, 직접 체험하면서 즐겨보세요!"
                            pictureSrc="image/optimized/drone-jacket/page-jacket-2.png"
                            style={
                                //Todo: 사진 수정 필요 -> 라이트나 카메라가 달려있는 사진으로 변경할 것, 현재는 배경 제거한 사진이 없어 예전 사진 그대로 사용
                                {
                                    color: FeatureStyleColor.LightBlue,
                                    form: FeatureStyleForm.normal
                                }}
                        />
                        <FeatureElement
                            title="당신의 개성을 표현할 수 있는 색상을 입혀 보세요"
                            content="Phantom 4 Pro 용 8종, Mavic 2 용 2종의 다양한 색상을 선택할 수 있습니다."
                            pictureSrc="image/optimized/drone-jacket/page-jacket-3.png"
                            style={
                                //Todo: 사진 수정 필요 -> 금색 또는 검은색 커버, 위와 마찬가지 이유로 예전 사진 그대로 사용
                                {
                                    color: FeatureStyleColor.Gray,
                                    form: FeatureStyleForm.reversed
                                }}
                        />
                        <FeatureElement
                            title="좋아하는 캐릭터와 함께 하늘을 날아보세요"
                            content="당신이 가진 다양한 피규어를 태워서 즐겨보세요"
                            pictureSrc="image/optimized/drone-jacket/page-jacket-4.png"
                            style={{
                                color: FeatureStyleColor.Black,
                                form: FeatureStyleForm.normal
                            }}
                        />
                        <FeatureElement
                            title="당신의 드론에 메시지를 새겨 넣을 수 있습니다"
                            content="드론을 손상시키지 않고도 문자나 심볼을 표현할 수 있습니다."
                            pictureSrc="image/optimized/drone-jacket/page-jacket-5.png"
                            style={{
                                color: FeatureStyleColor.LightBlue,
                                form: FeatureStyleForm.reversed
                            }}
                        />
                    </section>
                    <section>
                        {
                            //----- Story -----//
                        }
                        <Story />
                    </section>
                    <section>
                        <SpecTable
                            title="드론 재킷 Ph4 (DJI Phantom 4 용)"
                            content={
                                [
                                    { name: "제품 소재", value: "폴리 카보네이트" },
                                    { name: "규격", value: "20 × 20 × 6 cm" },
                                    { name: "무게", value: "64g (나사를 결합 시 72g)" },
                                    { name: "색상", value: "white, black, red, gold, silver (5종)" }
                                ]
                            }
                            pictureSrc="image/page-jacket-21.png"
                        />
                        <SpecTable
                            title="드론 재킷 Mv2 (DJI Mavic 2 용)"
                            content={
                                [
                                    { name: "제품 소재", value: "폴리 카보네이트" },
                                    { name: "규격", value: "10 X 10 X 6 cm" },
                                    { name: "무게", value: "48g (나사 결합 시 56g)" },
                                    { name: "색상", value: "white, red (2종)" }
                                ]
                            }
                            pictureSrc="image/page-jacket-20.jpg"
                        />
                        <div className="page-element">
                            {
                                //이 부분은 고민해보기, 컴포넌트로 만드는 게 맞을 듯.
                            }
                            <p style={{fontSize: "1rem"}}>주의: 드론 재킷 상단에 부착된 나사를 활용하여 100g 이상의 무거운 부가장치를 부착하면 드론의 비행에 부정적인 영향을 미쳐서 비행 도중에 중심을 잃고 추락할 수 있습니다.</p>
                        </div>
                        <SummarySimple 
                            title="Drone Jacket"
                            subtitle="Upgrade your drone"
                            buttonText="구매하기"
                            linkTo="https://www.wadiz.kr/web/campaign/detail/72456?utm_source=wadizshare_in&utm_medium=url"
                        />
                    </section>
                </main>
                <footer>
                    <img src="image/prototype/footer.png" style={{ maxWidth: '100%', marginTop: '200px' }} alt="Main Page" />
                </footer>
            </div>
        );
    }
}

export default DroneJacket_2;