import React, { Component } from 'react';
import MenuItem from './PageMenuItem';

export default class PageNavigation extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <MenuItem text='기업 소개' route='about' />
                    <MenuItem text='Drone Jacket' route='drone-jacket' />
                </ul>
            </nav>
        );
    }
}