import React, { Component } from 'react';
import './button-style.css';
import { Link } from 'react-router-dom';

interface IButtonTypeBProps {
    text: string,
    linkTo?: string,
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

class ButtonTypeB extends Component<IButtonTypeBProps> {
    constructor(props: IButtonTypeBProps) {
        super(props);
        this.defaultOnClick = this.defaultOnClick.bind(this);

        this.buttonView = (
            <div className="button-type-b"
                onClick={this.props.onClick ? this.props.onClick : this.defaultOnClick}>
                {this.props.text}
            </div>
        );
    }

    buttonView: JSX.Element;

    defaultOnClick() {
        if (this.props.linkTo === undefined) {
            console.warn(`This button do nothing.`)
        }
    }

    render() {
        if (this.props.linkTo) {
            return (
                <Link to={this.props.linkTo}>
                    {this.buttonView}
                </Link>
            );
        } else {
            return this.buttonView;
        }
    }
}

export default ButtonTypeB;