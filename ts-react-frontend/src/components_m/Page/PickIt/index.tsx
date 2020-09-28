import React from 'react';
import Title from '../../PageElements/Title';
import Summary from '../../PageElements/Summary';
import FeatureElement, { FeatureStyleColor, FeatureStyleForm } from '../../PageElements/FeatureElement';
import List from '../../PageElements/List';
import TabPage from '../../PageElements/TabPage';
import QnA from '../../PageElements/QnA';
import SpecTable from '../../PageElements/SpecTable';
import TabSolo from './TabSolo';
import TabDuel from './TabDuel';
import TabDT from './TabDTD';

import './PickIt.css';

const PickIt: React.FC = () => {
    return (
        <main id="page-Pick-it">
            <section>
                <Title mainTitleText="D, Pick it!" subTitleText="Experience it yourself" />
            </section>
            <section>
                <Summary
                    title="신개념 드론 인형뽑기 게임"
                    content="드론 인형뽑기 D, Pick It은 드론으로 하는 신개념 인형 뽑기 게임입니다. 드론에 달린 집게로 인형을 뽑으면서 드론 조종에 대한 다양한 경험을 즐길 수 있습니다."
                    videoSrc="video/page-pickit-main.mp4" videoAutoPlay={true}
                    buttonText="문의하기"
                    onClick={() => alert('에이치디아이랩\n\n031-290-7619\n경기도 수원시 장안구 일월로 40 (성균관대학교) 제 2공학관 4층 26411호\nsilee7601@gmail.com')}
                />
            </section>
            <section className="section-wide">
                <FeatureElement
                    title="드론 조종의 재미"
                    content="드론이 낯선 사람도, 직접 체험하면서 즐겨보세요!"
                    videoSrc="video/page-pickit-02.mp4" videoAutoPlay={true}
                    style={{
                        backgroundColor: FeatureStyleColor.White,
                        form: FeatureStyleForm.normal
                    }}
                />
                <FeatureElement
                    title="누구나 즐길 수 있는 게임"
                    content="연령 또는 장애나 신체적 제한 없이, 남녀노소 누구나 쉽게 즐길 수 있습니다. 실내외 구분없이 어디서든 즐길 수 있습니다."
                    videoSrc="video/page-pickit-03.mp4" videoAutoPlay={true}
                    style={{
                        backgroundColor: FeatureStyleColor.Dark,
                        fontColor: FeatureStyleColor.White,
                        form: FeatureStyleForm.reversed
                    }}
                />
                <FeatureElement
                    title="인형뽑기의 묘미"
                    content="그냥 단순한 인형뽑기로 보이시나요? D, Pick it은 혼자서(Solo), 또는 여러명이 경쟁하면서(Duel) 다양한 즐거움을 선사합니다."
                    videoSrc="video/page-pickit-04.mp4" videoAutoPlay={true}
                    style={{
                        backgroundColor: FeatureStyleColor.Gray,
                        form: FeatureStyleForm.normal
                    }}
                />
            </section>
            <section>
                <List
                    title="D, Pick it 기능성 게임의 효과"
                    textList={[
                        "주의력 및 집중력 향상",
                        "미세 손동작 훈련",
                        "눈과 손의 협업 반응 훈련",
                        "강한 동기부여 및 성취감",
                        "오프라인 체험 게임의 건강함"
                    ]}
                    pictureSrc="image/page-pickit-1.JPG"
                />
            </section>
            <section>
                <TabPage
                    tabPageTitle={window.innerWidth > 1275 ? ["D, Pick it Solo", "D, Pick it Duel", "D, Pick it Duel Team"] : ["Solo", "Duel", "Duel Team"]}
                    tabContents={[
                        <TabSolo />,
                        <TabDuel />,
                        <TabDT />
                    ]}
                />
            </section>
            <section>
                <Summary
                    title="Pick it Claw"
                    content="HDI Lab. 은 드론 인형뽑기 D, Pick it 전용 집게인 Pick it Claw를 개발 및 제작하여 판매하고 있습니다."
                    buttonText="구매 문의"
                    pictureSrc="image/page-pickit-2.png"
                    onClick={() => alert('에이치디아이랩\n\n031-290-7619\n경기도 수원시 장안구 일월로 40 (성균관대학교) 제 2공학관 4층 26411호\nsilee7601@gmail.com')}
                />
            </section>
            <section>
                <QnA
                    title="어떤 드론으로 게임으로 하나요?"
                    content="비행 성능이 좋은 DJI 팬텀 4 Pro 기종을 사용합니다. 이보다 작은 드론은 충분한 힘을 내지 못하므로 위험합니다."
                />
                <QnA
                    title="드론으로 인형뽑기를 어떻게 하나요?"
                    content="HDI Lab에서 개발한 인형뽑기 집게 Pick it Claw를 드론에 달았습니다. 드론을 조종해서 원하는 위치로 이동한 뒤, 원격으로 조종할 수 있는 집게를 이용해서 인형을 뽑으면서 즐길 수 있습니다."
                />
                <QnA
                    title="얼마나 큰 인형을 들어 올릴 수 있나요?"
                    content="DJI 팬텀 4 Pro 드론에 집게까지 부착한 이미 상당히 비행에 영향을 미치게 되므로 무게 80g 이하의 인형을 집어 올리는 것이 안전합니다."
                />
            </section>
            <section>
                <SpecTable
                    title="Phantom 4"
                    content={
                        [
                            { name: "모델명", value: "Phantom 4 Pro" },
                            { name: "무게", value: "1275g" },
                            { name: "대각선 길이", value: "350mm (프로펠러 제외)" },
                            { name: "최대 속력", value: "72km/h (S 모드)" },
                            { name: "플레이 시간", value: "약 15분" }
                        ]
                    }
                    pictureSrc="image/page-pickit-4.png"
                />
                <SpecTable
                    title="Pick it Claw"
                    content={
                        [
                            { name: "모델명", value: "Pick it Claw" },
                            { name: "무게", value: "300g" },
                            { name: "크기", value: "15cm (최대너비) x 20cm" },
                            { name: "통신 방식", value: "LoRaWAN®" }
                        ]
                    }
                    pictureSrc="image/page-pickit-5.png"
                />
            </section>
        </main>
    );
}

export default PickIt;