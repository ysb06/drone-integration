import React, { Component } from 'react';
import StoryTitle from '../../PageElements/StoryTitle';
import StoryText from '../../PageElements/StoryText';
import StoryImage from '../../PageElements/StoryImage';
import ListPart from '../../PageElements/ListPart';
import StroyVideo from '../../PageElements/StoryVideo';

class Story extends Component {
    render() {
        return (
            <div className="story">
                <StoryTitle text="당신의 드론에게 부족한 것" />
                <StoryText text="
                            처음 드론을 날려보면 하늘에서 촬영도 하고 한동안 재미있지만 그 외에는 다른 할 수 있는 것이 없어서 흥미가 점점 떨어질 수 밖에 없습니다.
                            그렇다고 새로운 기능을 가진 비싼 드론을 매번 살 수도 없습니다. 큰 돈을 들이지 않고도 드론을 재미있게 즐길 수 있는 방법은 없을까요?
                            드론 재킷은 기존의 드론에 기능과 재미를 더해줄 수 있는 방법을 제시합니다.
                        " />
                <StoryImage src="image/page-jacket-6.jpg" alt="Dream of Drone Jacket" />

                <StoryTitle text="DJI 드론 오너에게 꼭 필요한 필수 액세사리" />
                <StoryImage src="image/page-jacket-3.jpg" title="당신의 드론 이렇게 달라질 수 있습니다." alt="Upgrade Drone Picture" />
                <StoryText text="
                            저희 HDI Lab.에서는 저렴한 가격에 당신의 드론을 변화시켜 줄 수 있는 스킨 커버를 판매하고 있습니다. 
                            DJI Phantom 4와 Mavic 2 두 가지 모델에 장착 가능한 커버를 각각 선택해서 구입 할 수 있습니다. 
                            이 스킨 커버의 기능적 특징은 크게 다음과 같습니다.
                        " />
                <ListPart textList={["드론 본체 위에 씌울 수 있는 커버 스킨", "¼\" 표준나사를 사용하여 드론 상단에 액세서리 부착"]} />
                {
                    //List Part 재설계 필요, 애초에 page-element를 각 컴포넌트 마다 삭제하고 재설계가 필요
                }
                <StoryTitle text="드론의 기능을 업그레이드 해 보십시오" />
                <StroyVideo src="https://www.youtube.com/embed/d695jTaL9Nc" />
                <StoryText text={"Drone Jacket의 가장 큰 장점은 ¼\" 표준나사를 사용하여 측량용 센서, 360도 카메라나 조명기구, 소형 프로젝터등 다양한 액세서리를 결합시킬 수 있다는 점입니다.위의 영상과 같이 Phantom 4 드론에 360 카메라를 장착하여 멋진 파노라마 영상을 촬영하거나, 아래의 영상과 같이 드론 위에 스포트라이트를 장착하여 더 밝게 촬영할 수 있습니다."} />
                <StoryImage src="image/page-jacket-12.png" />
                <StroyVideo src="https://www.youtube.com/embed/-RS3X2CXXZs" title="드론에 스포트라이트를 장착" />

                <StoryTitle text="당신의 드론을 컬러풀하게..." />
                <StoryImage src="image/page-jacket-14.gif" />
                <StoryText text="다양한 색상의 Drone Jacket이 준비되어 있어 당신이 원하는대로 드론의 색상을 변경시킬 수 있습니다." />
                <StoryImage src="image/page-jacket-24.png" title="Phantom 4 용 Drone Jacket 색상 종류" />
                <StoryImage src="image/page-jacket-25.png" title="Mavic 2 용 Drone Jacket 색상 종류" />

                <StoryTitle text="피규어를 드론위에 태워서..." />
                <StoryImage src="image/page-jacket-16.jpg" />
                <StroyVideo src="https://www.youtube.com/embed/lr7qq3vT05U" />
                <StoryText text={"드론 재킷과 피규어 스탠드 어댑터를 사용하면 작은 피규어들을 드론에 태울 수 있습니다. 피규어 어댑터는 대형과 소형 두 종류가 있으며 ¼\" 표준나사를 통해 드론에 고정할 수 있습니다. 귀여운 피규어가 하늘을 나는 모습을 보면서 같이 하늘을 나는 듯한 즐거움을 만끽하세요. "} />
                <StoryImage src="image/page-jacket-18.png" title="피규어 어댑터" />

                <StoryTitle text="드론에 당신의 개성을 원하는대로 표현하세요" />
                <StoryImage src="image/page-jacket-23.jpg" />
                <StoryImage src="image/page-jacket-19.jpg" title="Jacket위에 자유로운 커스터마이징" />
                <StoryText text="                                    
                        Drone Jacket을 사용하면 드론 본체를 더럽히지 않고 자유롭게 스티커를 붙이거나 메시지를 새길 수 있습니다.
                        Drone Jacket의 가장 큰 특징은 탈부착이 쉽고 드론에 손상을 주지 않는다는 점입니다.
                        서로 다른 색상의 Drone Jacket에 원하는 대로 커스터마이징한 후 마음에 드는 대로 교체해서 사용하세요"
                />
            </div>
        );
    }
}

export default Story;