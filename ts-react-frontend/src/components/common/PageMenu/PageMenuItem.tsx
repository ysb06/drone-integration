import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './PageMenu.css';

interface IPageMenuItemProps {
    route: string,
    text: string
}

export default class PageMenuItem extends Component<IPageMenuItemProps> {
    render() {
        return (
            <li>
                <div className="menu-item">
                    <Link to={`/${this.props.route}`}>
                        <div className="button">{this.props.text}</div>
                    </Link>
                </div>
            </li>
        );
    }
}