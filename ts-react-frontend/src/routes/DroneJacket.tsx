import React, { Component, Fragment } from 'react';
//import './Root.css';
import Header from '../components/legacy/PageHeader';
import Navigation, { MenuItems } from '../components/legacy/PageNavigation';
import MainDroneJacket from '../components/legacy/MainDroneJacket';
import Footer from '../components/legacy/PageFooter';

class DroneJacket extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Navigation items={MenuItems} />
                <MainDroneJacket />
                <Footer />
            </Fragment>
        );
    }
}

export default DroneJacket;