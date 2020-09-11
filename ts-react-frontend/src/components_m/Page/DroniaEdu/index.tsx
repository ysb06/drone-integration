import React from 'react';
import Title from '../../PageElements/Title';
import Summary from '../../PageElements/Summary';
import EmptyBox from '../../PageElements/EmptyBox';

const DroniaEdu: React.FC = () => {
    return (
        <main id="page-droina-edu">
            <section>
                <Title mainTitleText="Dronia Edu" subTitleText="Learn & play with Drones" />
            </section>
            <section>
                <Summary title="드론의 가능성을 배울 수 있습니다." content="준비중" />
            </section>
            <EmptyBox />
        </main>
    );
}

export default DroniaEdu;