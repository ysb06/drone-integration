import React, { Component, Fragment } from 'react';
//import './Root.css';
import Header from '../components/legacy/PageHeader';
import PageMenu from '../components/common/PageMenu/PageMenu'
import MainFront from '../components/legacy/MainFront';
import Footer from '../components/legacy/PageFooter';

class Root extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <PageMenu />
                <MainFront />
                <Footer />
            </Fragment>
        );
    }
}

export default Root;