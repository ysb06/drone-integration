import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './MenuItem.css';
import MenuItemCore from './MenuItemCore';

interface IMenuItemProps {
    item: MenuItemCore
}

class MenuItem extends Component<IMenuItemProps> {
    render() {
        return (
            <div className="menu-item">
                <Link to={`/${this.props.item.route}`}>
                    <div className="button">{this.props.item.name}</div>
                </Link>
            </div>
        );
    }
}

export default MenuItem;