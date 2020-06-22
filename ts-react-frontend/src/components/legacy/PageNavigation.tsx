import React, { Component } from 'react';
import './PageNavigation.css';
import MenuItem from './PageNavigation/MenuItem';
import MenuItemCore from './PageNavigation/MenuItemCore'

export const MenuItems: Array<MenuItemCore> = [
    new MenuItemCore('기업 소개', 'AboutUs'),
    new MenuItemCore('Drone Jacket', 'drone-jacket'),
    new MenuItemCore('Pick it!', 'pick-it'),
    new MenuItemCore('Dronia Edu', 'dronia-edu'),
];

interface INavigationProps {
    items: Array<MenuItemCore>
}

class Navigation extends Component<INavigationProps> {
    render() {
        return (
            <nav>
                <ul>
                {this.props.items.map((value, index) => {
                    return <li key={index}><MenuItem item={value} /></li>;
                })}
                </ul>
            </nav>
        );
    }
}

export default Navigation;