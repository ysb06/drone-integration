import React, { Component, Fragment } from 'react';

export enum FeatureStyleColor {
    White = "whitesmoke",
    Dark = "#1F242F",
    Black = "black",
    Gray = "#F0F1F5",
    LightBlue = "#DEE6EA"
}

export enum FeatureStyleForm {
    normal, reversed
}

export interface IFeatureElementProps {
    title: string,
    content: string,
    pictureSrc?: string,
    videoSrc?: string,
    videoAutoPlay?: boolean,
    style?: {
        color?: FeatureStyleColor
        form?: FeatureStyleForm
    }
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

    renderContent(): JSX.Element {
        switch (this.props.style?.form) {
            case FeatureStyleForm.reversed:
                return (
                    <Fragment>
                        <div className="media">
                            {this.renderMedia()}
                        </div>
                        <div className="text">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.content}</p>
                        </div>
                    </Fragment>
                );
            case FeatureStyleForm.normal:
            default:
                return (
                    <Fragment>
                        <div className="text">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.content}</p>
                        </div>
                        <div className="media">
                            {this.renderMedia()}
                        </div>
                    </Fragment>
                );
        }
    }

    render() {
        return (
            <div className="feature-background"
                style={{
                    backgroundColor: this.props.style?.color?.toString(),
                    color:
                        this.props.style?.color === FeatureStyleColor.Dark ||
                        this.props.style?.color === FeatureStyleColor.Black
                        ? "whitesmoke" : undefined
                    //글자색 예외 코드...어두운 색상을 자동으로 인식하게 할 수 있을까?
                }}>
                <div className="feature-element">
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

export default FeatureElement;