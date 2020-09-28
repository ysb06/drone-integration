import React from 'react';
import Title from '../../PageElements/Title';
import SummarySimple from '../../PageElements/SummarySimple';
import SpecTable from '../../PageElements/SpecTable';
import Summary from '../../PageElements/Summary';
import FeatureElement, { FeatureStyleForm, FeatureStyleColor } from '../../PageElements/FeatureElement';
import Story from './Story';

import './DroneJacket.css';

const DroneJacket: React.FC = () => {
    return (
        <main id="page-drone-jacket">
            <section>
                <Title mainTitleText="Drone Jacket" subTitleText="Upgrade your drone" />
            </section>
            <section>
                <Summary
                    content="Drone Jacket: a case cover for drones. Combined with a 1/4-inch screw, you can attach accessories to drones for upgrade and customization."
                    pictureSrc="image/optimized/drone-jacket/page-jacket-1.png"
                    buttonText="Buy Now"
                    linkTo="https://www.wadiz.kr/web/campaign/detail/72456?utm_source=wadizshare_in&utm_medium=url"
                />
            </section>
            <section className="section-wide">
                <FeatureElement
                    title="Upgrade your drone"
                    content="Mount or add any gears you want to your drone with a 1/4-inch screw."
                    pictureSrc="image/optimized/drone-jacket/page-jacket-2.png"
                    style={
                        //Todo: 사진 수정 필요 -> 라이트나 카메라가 달려있는 사진으로 변경할 것, 현재는 배경 제거한 사진이 없어 예전 사진 그대로 사용
                        {
                            backgroundColor: FeatureStyleColor.LightBlue,
                            form: FeatureStyleForm.normal
                        }}
                />
                <FeatureElement
                    title="Color your drone"
                    content="Choose any color you want among eight different colors for Phantom 4, two different colors for Mavic 2"
                    pictureSrc="image/optimized/drone-jacket/page-jacket-3.png"
                    style={
                        //Todo: 사진 수정 필요 -> 금색 또는 검은색 커버, 위와 마찬가지 이유로 예전 사진 그대로 사용
                        {
                            backgroundColor: FeatureStyleColor.Gray,
                            form: FeatureStyleForm.reversed
                        }}
                />
                <FeatureElement
                    title="Fly with your favorite character"
                    content="Go on an adventure with your figurine aboard the drone."
                    pictureSrc="image/optimized/drone-jacket/page-jacket-4.png"
                    style={{
                        backgroundColor: FeatureStyleColor.Black,
                        form: FeatureStyleForm.normal
                    }}
                />
                <FeatureElement
                    title="당신의 드론에 메시지를 새겨 넣을 수 있습니다"
                    content="드론을 손상시키지 않고도 문자나 심볼을 표현할 수 있습니다."
                    pictureSrc="image/optimized/drone-jacket/page-jacket-5.png"
                    style={{
                        backgroundColor: FeatureStyleColor.LightBlue,
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
                    title="드론 재킷 Ph4 (Phantom 4)"
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
                    title="드론 재킷 Mv2 (Mavic 2)"
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
                    <p style={{ fontSize: "1rem" }}>주의: 드론 재킷 상단에 부착된 나사를 활용하여 100g 이상의 무거운 부가장치를 부착하면 드론의 비행에 부정적인 영향을 미쳐서 비행 도중에 중심을 잃고 추락할 수 있습니다.</p>
                </div>
                <SummarySimple
                    title="Drone Jacket"
                    subtitle="Upgrade your drone"
                    buttonText="구매하기"
                    linkTo="https://www.wadiz.kr/web/campaign/detail/72456?utm_source=wadizshare_in&utm_medium=url"
                />
            </section>
        </main>
    );
}

export default DroneJacket;