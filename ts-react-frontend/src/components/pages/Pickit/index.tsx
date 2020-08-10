import React, { Component } from 'react';
import MainMenu from '../../common/MainMenu';
import '../../common/PageElement/page.css'; //추후 통합 페이지에서 import, 여기에선 삭제
import Title from '../../common/PageElement/Title';

import './pick-it.css';
import Summary from '../../common/PageElement/Summary';
import FeatureElement, { FeatureStyle } from '../../common/PageElement/FeatureElement';
import List from '../../common/PageElement/List';
import TabPage from '../../common/PageElement/TabPage';

class PickIt extends Component {
    render() {
        //추후 메인 네비게이션은 항시 포함하는 통합 페이지로 렌더링
        //통합 페이지에서 각 라우터에 해당하는 서브페이지를 렌더링
        return (
            <div id="pick-it-page">
                <header>
                    <MainMenu />
                </header>
                <main>
                    <Title mainTitleText="D, Pick it!" subTitleText="Experience it yourself" />
                    <Summary
                        title="신개념 드론 인형뽑기 게임"
                        content="드론 인형뽑기 D, Pick It은 드론으로 하는 신개념 인형 뽑기 게임입니다. 드론에 달린 집게로 인형을 뽑으면서 드론 조종에 대한 다양한 경험을 즐길 수 있습니다."
                        videoSrc="video/sample.mp4" videoAutoPlay={false}
                    />
                    <section>
                        <FeatureElement
                            title="드론 조종의 재미"
                            content="드론이 낯선 사람도, 직접 체험하면서 즐겨보세요!"
                            videoSrc="video/page-pickit-02.mp4" videoAutoPlay={true}
                            style={FeatureStyle.White}
                        />
                        <FeatureElement
                            title="누구나 즐길 수 있는 게임"
                            content="연령 또는 장애나 신체적 제한 없이, 남녀노소 누구나 쉽게 즐길 수 있습니다. 또한 실내외 구분없이 어디서든 즐길 수 있습니다."
                            videoSrc="video/sample.mp4" videoAutoPlay={false}
                            reversed={true}
                            style={FeatureStyle.Dark}
                        />
                        <FeatureElement
                            title="인형뽑기의 묘미"
                            content="그냥 단순한 인형뽑기로 보이시나요? D, Pick it은 혼자서(Solo), 여러명이 경쟁하면서(Dual) 다양한 즐거움을 선사합니다."
                            videoSrc="video/sample.mp4" videoAutoPlay={false}
                            style={FeatureStyle.Gray}
                        />
                    </section>
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
                    <TabPage tabPageTitle={["Solo", "Double", "Deul"]} />
                    <Summary
                        title="Pick it Claw"
                        content="HDI Lab. 은 드론 인형뽑기 D, Pick it 전용 집게인 Pick it Claw를 개발 및 제작하여 판매하고 있습니다."
                        buttonText="구매 문의"
                        pictureSrc="image/page-pickit-2.png"
                    />
                </main>
                <footer>
                    <img src="image/prototype/footer.png" style={{ maxWidth: '100%', marginTop: '200px' }} alt="Main Page" />
                </footer>
            </div>
        );
    }
}

export default PickIt;