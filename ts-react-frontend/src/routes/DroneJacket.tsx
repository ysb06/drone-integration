import React, { Component, Fragment } from 'react';
//import './Root.css';
import Header from '../components/PageHeader';
import Navigation, { MenuItems } from '../components/PageNavigation';
import MainDroneJacket from '../components/MainDroneJacket';
import Footer from '../components/PageFooter';

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