import React, { Component, Fragment } from 'react';

import MainMenu from '../../common/MainMenu';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <header>
                    <MainMenu />
                </header>
                <main>
                    <article>
                        <img src="image/prototype/page-main-1.png" style={{maxWidth: '100%'}} alt="Main Page"/>
                    </article>
                </main>
                <footer>
                    <img src="image/prototype/footer.png" style={{maxWidth: '100%', marginTop: '200px'}} alt="Main Page"/>
                </footer>
            </Fragment>
        );
    }
}

export default Home;