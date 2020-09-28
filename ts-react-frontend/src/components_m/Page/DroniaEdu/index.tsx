import React from 'react';
import Title from '../../PageElements/Title';
import Summary from '../../PageElements/Summary';
import EmptyBox from '../../PageElements/EmptyBox';

import './DroniaEdu.css';
import FeatureElement, { FeatureStyleColor, FeatureStyleForm } from '../../PageElements/FeatureElement';
import ImageSection from '../../PageElements/ImageSection';
import List from '../../PageElements/List';

const DroniaEdu: React.FC = () => {
    return (
        <main id="page-droina-edu">
            <section>
                <Title mainTitleText="Dronia Edu" subTitleText="Learn & play with Drones" />
            </section>
            <section>
                <Summary title="드론을 활용할 수 있는 아두이노 교육용 키트"
                    content="
                    본 키트를 통하여 드론에 장착 가능한 Pick it Claw를 제작해 봄으로서 
                    고급의 아두이노 및 코딩 지식을 배우고 
                    실제적인 제품 개발 과정을 체험해 볼 수 있습니다."
                    pictureSrc="image/optimized/dronia-edu/page-dronia-1.png"
                />
            </section>
            <section className="section-wide">
                <FeatureElement
                    title="드론에 연결해서 하늘로 날려보세요!"
                    content="드론에 장착되어 날아다니는 와중에도 완벽하게 작동합니다."
                    pictureSrc="image/optimized/dronia-edu/page-dronia-2.png"
                    style={
                        //Todo: 사진 수정 필요 -> 라이트나 카메라가 달려있는 사진으로 변경할 것, 현재는 배경 제거한 사진이 없어 예전 사진 그대로 사용
                        {
                            backgroundColor: "#425059",
                            fontColor: FeatureStyleColor.White,
                            form: FeatureStyleForm.normal
                        }}
                />
                <FeatureElement
                    title="집게를 마음대로 움직여 보세요!"
                    content="제대로 조립했다면 당신이 만든 Claw를 마음대로 조작할 수 있는 성취감을 맛볼 수 있습니다."
                    pictureSrc="image/optimized/dronia-edu/page-dronia-3.png"
                    style={
                        //Todo: 사진 수정 필요 -> 금색 또는 검은색 커버, 위와 마찬가지 이유로 예전 사진 그대로 사용
                        {
                            backgroundColor: "#867A6C",
                            form: FeatureStyleForm.reversed
                        }}
                />
                <FeatureElement
                    title="원하는 물건을 집고 올려보세요!"
                    content="인형뽑기의 재미를 드론으로도 마음껏 즐길 수 있습니다."
                    pictureSrc="image/optimized/dronia-edu/page-dronia-4.png"
                    style={{
                        backgroundColor: "#F0CAB6",
                        form: FeatureStyleForm.normal
                    }}
                />
                <FeatureElement
                    title="조종기만 있으면 멀리서도 가능해요!"
                    content="드론 조정과 유사하게 조작이 가능합니다."
                    pictureSrc="image/optimized/dronia-edu/page-dronia-5.png"
                    style={{
                        backgroundColor: "#F3DFBA",
                        form: FeatureStyleForm.reversed
                    }}
                />
            </section>
            <section>
                <ImageSection title="키트 구성 요약" pictureSrc="image/optimized/dronia-edu/page-dronia-6.png" />
            </section>
            <section>
                <div className="summary-title"><h2>주요 교육 내용</h2></div>
                <h3>1장, 2장</h3>
                <List
                    textList={[
                        "아두이노는 여러분들이 원하는 대로 모터를 움직이게 만들기 위해 필요한 부품입니다.",
                        "아두이노에 명령문을 올리면, 아두이노는 모터의 방향과 각도가 여러분의 생각처럼 움직이게 도와줍니다.",
                        "버튼을 이용해 아두이노에게 명령을 내려보세요. 통신부품이 있으면 멀리서도 모터를 움직일 수 있습니다."
                    ]}
                    pictureSrc="image/optimized/dronia-edu/page-dronia-7.png"
                />
                <h3>3장</h3>
                <List
                    textList={[
                        "아두이노의 명령을 받으면, 서보모터는 여러분이 설정한 각도만큼 모터의 손잡이를 회전시킵니다.",
                        "서보모터의 손잡이가 위로 회전한다면, 서보모터에 연결된 집게는 오므라질 것입니다.",
                        "손잡이가 아래로 회전한다면, 집게는 벌어질 것입니다. 서보모터를 이용해 인형을 포획하세요!"
                    ]}
                    pictureSrc="image/optimized/dronia-edu/page-dronia-8.png"
                />
                <h3>4장</h3>
                <List
                    textList={[
                        "아두이노의 명령을 받으면, DC모터는 여러분이 설정한 만큼 모터의 축을 회전시킵니다.",
                        "DC모터가 줄을 풀어 내리는 방향으로 회전한다면, 집게를 내려 인형에게 보낼 수 있습니다.",
                        "DC모터가 집게 줄을 감아 올리는 방향으로 회전한다면, 집게를 들어올려 인형을 가져올 수 있습니다."
                    ]}
                    pictureSrc="image/optimized/dronia-edu/page-dronia-9.png"
                />
                <h3>5장</h3>
                <List
                    textList={[
                        "여러분이 배운 것들을 이용하기 위하여 키트에서 제공하는 집게와 모터집을 직접 조립해 보세요.",
                        "집게는 서보모터를 고정시키고,  모터 집은 DC모터와 전지 그리고 여러분이 만든 보드를 고정해줍니다.",
                        "모든 부품을 조립하고 드론에 달아 날려보세요!"
                    ]}
                    pictureSrc="image/optimized/dronia-edu/page-dronia-10.png"
                />
            </section>
            <section>
                <Summary title="교재 상세 자료" content="아래 링크에서 교육 상세 내용을 확인하세요" buttonText="다운로드"/>
            </section>
            <EmptyBox />
        </main>
    );
}

export default DroniaEdu;