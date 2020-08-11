import React, { Component, Fragment } from 'react';

export enum FeatureStyle {
    White,
    Dark,
    Gray
}

export interface IFeatureElementProps {
    title: string,
    content: string,
    reversed?: boolean,
    pictureSrc?: string,
    videoSrc?: string,
    videoAutoPlay?: boolean,
    style?: FeatureStyle
}

class FeatureElement extends Component<IFeatureElementProps> {
    renderMedia(): JSX.Element {
        if (this.props.pictureSrc) {
            return (<img src={this.props.pictureSrc} alt="Feature" />)
        } else if (this.props.videoSrc) {
            return (<video src={this.props.videoSrc} autoPlay={this.props.videoAutoPlay} loop />)
        } else {
            return (<Fragment></Fragment>);
        }
    }

    render() {
        let style: string;
        switch (this.props.style) {
            case FeatureStyle.Dark:
                style = "feature-background-1";
                break;
            case FeatureStyle.Gray:
                style = "feature-background-2";
                break;
            case FeatureStyle.White:
            default:
                style = "feature-background-0";
                break;
        }
        return (
            <div className={style}>
                <div className="page-element">
                    {this.props.reversed ? (
                        <div className="feature-element">
                            <div className="media">
                                {this.renderMedia()}
                            </div>
                            <div className="text">
                                <h2>{this.props.title}</h2>
                                <p>{this.props.content}</p>
                            </div>
                        </div>
                    ) : (
                            <div className="feature-element">
                                <div className="text">
                                    <h2>{this.props.title}</h2>
                                    <p>{this.props.content}</p>
                                </div>
                                <div className="media">
                                    {this.renderMedia()}
                                </div>
                            </div>

                        )}
                </div>
            </div>
        );
    }
}

export default FeatureElement;