import React, { Component } from 'react';

interface ITitleProps {
    mainTitleText: string,
    subTitleText?: string
}

class Title extends Component<ITitleProps> {
    render() {
        return (
            <div className="title">
                <h1>{this.props.mainTitleText}</h1>
                <p>{this.props.subTitleText ? this.props.subTitleText : ""}</p>
            </div>
        );
    }
}

export default Title;