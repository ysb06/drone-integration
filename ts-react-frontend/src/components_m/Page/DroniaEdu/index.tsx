import React, { Fragment, useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';

import Title from '../../PageElements/Title';
import Summary from '../../PageElements/Summary';
import EmptyBox from '../../PageElements/EmptyBox';
import FeatureElement, { FeatureStyleColor, FeatureStyleForm } from '../../PageElements/FeatureElement';
import ImageSection from '../../PageElements/ImageSection';
import List from '../../PageElements/List';
import NewWindow from 'react-new-window';
import LectureMovie from '../../LectureMovie';
import PageButton from '../../PageElements/PageButton';

import './DroniaEdu.css';
import 'react-bnb-gallery/dist/style.css'


const PHOTOS: string[] = new Array<string>(33).fill('').map(
    (value: string, index: number) =>
        index < 10 ?
            '/image/gallery/DreamSchool_0' + index + '.jpg' :
            '/image/gallery/DreamSchool_' + index + '.jpg'
);

const DroniaEdu: React.FC = () => {
    const [lecturePopupVisible, setLecturePopupVisible] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main id="page-droina-edu">
            <section>
                <Title mainTitleText="Dronia Edu" subTitleText="Learn & play with Drones" />
            </section>
            <section>
                <Summary title="아두이노 코딩으로 제작할 수 있는 드론 IoT 액세서리"
                    content="
                    본 키트를 통하여 드론에 장착 가능한 Pick it Claw를 제작해 봄으로서 
                    고급의 아두이노 및 코딩 지식을 배우고 
                    실제적인 제품 개발 과정을 체험해 볼 수 있습니다."
                    pictureSrc="image/optimized/dronia-edu/page-dronia-1.png"
                />
            </section>
            <section className="section-wide">
                <FeatureElement
                    title="IoT 전반에 대해서 공부합니다"
                    listContent={[
                        "사물 인터넷은 무엇인가?",
                        "사물 인터넷은 왜 필요한가?",
                        "사물 인터넷은 어디에 사용되는가?"
                    ]}
                    pictureSrc="image/optimized/dronia-edu/page-dronia-2.png"
                    style={
                        //Todo: 사진 수정 필요 -> 아래 3개 사진 바꾸기!!!!!!
                        {
                            backgroundColor: "#425059",
                            fontColor: FeatureStyleColor.White,
                            form: FeatureStyleForm.normal
                        }}
                />
                <FeatureElement
                    title="IoT의 구성 방법을 공부합니다"
                    listContent={[
                        "전류, 전압 저항 그리고 회로",
                        "센서와 엑츄에이터의 역할",
                        "아두이노 보드에서의 회로 구성",
                        "무선 통신"
                    ]}
                    pictureSrc="image/optimized/dronia-edu/page-dronia-3.png"
                    style={
                        //Todo: 사진 수정 필요 -> 금색 또는 검은색 커버, 위와 마찬가지 이유로 예전 사진 그대로 사용
                        {
                            backgroundColor: "#867A6C",
                            fontColor: FeatureStyleColor.White,
                            form: FeatureStyleForm.reversed
                        }}
                />
                <FeatureElement
                    title="아두이노 코딩을 통한 IoT 규칙 설정을 공부합니다."
                    listContent={[
                        "코딩, 프로그래밍의 기초",
                        "핀 설정과 모터 연결",
                        "센서와 엑츄에이터 조작 프로그래밍",
                    ]}
                    pictureSrc="image/optimized/dronia-edu/page-dronia-7.png"
                    style={{
                        backgroundColor: "#F0CAB6",
                        form: FeatureStyleForm.normal
                    }}
                />
                <FeatureElement
                    title="IoT 액세서리를 드론과 연결합니다."
                    listContent={[
                        "드론 택배 서비스의 활용",
                        "드론 액세서리를 이용한 서비스 구성",
                        "드론 액세서리를 이용한 엔터테인먼트",
                    ]}
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
                <div className="dronia-edu-result">
                    <img src="/image/optimized/dronia-edu/page-dronia-13.png" alt="dronia-edu result" />
                    <img src="/image/optimized/dronia-edu/page-dronia-14.png" alt="dronia-edu result" />
                </div>
            </section>
            <section>
                <h2>참고 자료</h2>
                <div className="dronia-edu-materials">
                    <div className="dronia-edu-materials-element">
                        <div><img src="/image/optimized/dronia-edu/page-dronia-11.svg" alt="Materials Icon" /></div>
                        <h3>교육 교재</h3>
                        <div className="materials-button-container">
                            <PageButton text="PDF 다운로드" linkTo="https://storage.googleapis.com/hdi-integration.appspot.com/hdi-edukit-1.pdf" />
                        </div>
                        <div className="materials-button-container">
                            <PageButton text="최종모델자료" linkTo="https://storage.googleapis.com/hdi-integration.appspot.com/code_image.zip" />
                        </div>
                    </div>
                    <div className="dronia-edu-materials-element">
                        <div><img src="/image/optimized/dronia-edu/page-dronia-12.svg" alt="Materials Icon" /></div>
                        <h3>지난 강의 영상</h3>
                        <div className="materials-button-container"><PageButton text="동영상 보기" onClick={showLecturePopup} /></div>
                    </div>
                </div>
            </section>

            {
                lecturePopupVisible ?
                    <NewWindow onUnload={hideLecturePopup} features={{ width: 960, height: 540 }}>
                        <LectureMovie />
                    </NewWindow>
                    : <Fragment />
            }
            <section>
                <h2>꿈의학교 갤러리</h2>
                <div className="dronia-edu-gallery">
                    <div className="dronia-edu-gallery-description">
                        <p>
                            Dronia Edu 교육의 일환으로 2020년 10월 11일 부터 11월 22일 까지 진행한 경기 꿈의 학교의 아빠와 함께하는 IoT 프로그래밍 실습 과정을 담은 사진들입니다.
                        </p>
                        <p>
                            아래 사진 버튼을 누르면 Dronia Edu가 어떤 모습으로 진행되는지 사진으로 감상할 수 있습니다.
                        </p>
                        <p style={{ textAlign: "center" }}>
                            ↓ 클릭 ↓
                        </p>
                    </div>
                    <div className="dronia-edu-gallery-button">
                        <img src="/image/optimized/dronia-edu/page-dronia-15.png" alt="Gallery Entry" />
                        <img src="/image/optimized/dronia-edu/page-dronia-16.png" alt="Gallery Entry" onClick={() => setIsOpen(true)} />
                    </div>
                    <ReactBnbGallery
                        show={isOpen}
                        photos={PHOTOS}
                        preloadSize={5}
                        onClose={() => setIsOpen(false)}
                    />
                </div>
            </section>
            <EmptyBox />
        </main>
    );

    function showLecturePopup() {
        setLecturePopupVisible(true);
    }

    function hideLecturePopup() {
        setLecturePopupVisible(false);
    }
}

export default DroniaEdu;