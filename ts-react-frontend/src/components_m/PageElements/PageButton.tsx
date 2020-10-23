import React, { Component } from 'react';
import './PageButton.css';

interface IPageButtonProps {
    text: string,
    linkTo?: string,
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

class PageButton extends Component<IPageButtonProps> {
    constructor(props: IPageButtonProps) {
        super(props);
        this.defaultOnClick = this.defaultOnClick.bind(this);

        this.buttonView = (
            <div className="page-button-content"
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
        return (
            <div className="page-button">
                {this.props.linkTo ?
                    <a href={this.props.linkTo} target="_Blank">
                        {this.buttonView}
                    </a> 
                    :
                    this.buttonView
                }
            </div>
        );
    }
}

export default PageButton;