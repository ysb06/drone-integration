import React, { Component } from 'react';
import Summary from '../../common/PageElement/Summary';
import Title from '../../common/PageElement/Title';
import MainMenu from '../../common/MainMenu';

class DroniaEdu extends Component {
    render() {
        return (
            <div className="dronia-app">
                <header>
                    <MainMenu />
                </header>
                <main style={{height: "55vh"}}>
                    <Title mainTitleText="DroniaEdu" subTitleText="Learn & play with Drones" />
                    <Summary title="드론의 가능성을 배울 수 있습니다." content="준비중" />
                </main>
                <footer>
                    <img src="image/prototype/footer.png" style={{ maxWidth: '100%', marginTop: '200px' }} alt="Main Page" />
                </footer>
            </div>
        );
    }
}

export default DroniaEdu;