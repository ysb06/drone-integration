import React, { Component, Fragment } from 'react';
//import './Root.css';
import Header from '../components/PageHeader';
import Navigation, { MenuItems } from '../components/PageNavigation';
import MainFront from '../components/MainFront';
import Footer from '../components/PageFooter';

class Root extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Navigation items={MenuItems} />
                <MainFront />
                <Footer />
            </Fragment>
        );
    }
}

export default Root;