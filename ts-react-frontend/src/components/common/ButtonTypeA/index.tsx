import React, { Component } from 'react';
import './button-style.css';
import { Link } from 'react-router-dom';

interface IButtonTypeAProps {
    text: string,
    textColor?: string,
    backgroundColor?: string,
    width?: number,
    height?: number
    linkTo?: string,
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

class ButtonTypeA extends Component<IButtonTypeAProps> {
    constructor(props: IButtonTypeAProps) {
        super(props);
        this.defaultOnClick = this.defaultOnClick.bind(this);

        let buttonStyle: React.CSSProperties = {};
        if (this.props.textColor) { buttonStyle.color = this.props.textColor }
        if (this.props.backgroundColor) { buttonStyle.backgroundColor = this.props.backgroundColor }
        if (this.props.width) { buttonStyle.width = this.props.width }
        if (this.props.height) { buttonStyle.height = this.props.height }
        //Todo: width, height에 따른 border-raidus 조정할 것

        this.buttonView = (
            <div className="button-typeA"
                style={buttonStyle}
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

export default ButtonTypeA;