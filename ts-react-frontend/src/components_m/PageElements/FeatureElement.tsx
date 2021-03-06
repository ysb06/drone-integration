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
    content?: string,
    listContent?: string[],
    pictureSrc?: string,
    videoSrc?: string,
    videoAutoPlay?: boolean,
    style?: {
        backgroundColor?: FeatureStyleColor | string
        fontColor?: FeatureStyleColor | string
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
            return (<Fragment />);
        }
    }

    renderContent(): JSX.Element {
        switch (this.props.style?.form) {
            case FeatureStyleForm.reversed:
                return (
                    <div className="feature-element-rev">
                        <div className="feature-element-media">
                            {this.renderMedia()}
                        </div>
                        <div className="feature-element-text">
                            <h3>{this.props.title}</h3>
                            {this.props.content ? <p>{this.props.content}</p> : this.getListContent(this.props.listContent)}
                        </div>
                    </div>
                );
            case FeatureStyleForm.normal:
            default:
                return (
                    <div className="feature-element">
                        <div className="feature-element-media">
                            {this.renderMedia()}
                        </div>
                        <div className="feature-element-text">
                            <h3>{this.props.title}</h3>
                            {this.props.content ? <p>{this.props.content}</p> : this.getListContent(this.props.listContent)}
                        </div>
                    </div>
                );
        }
    }

    getListContent(list: string[] | undefined): JSX.Element {
        return (
            <ul>
                { list ? list.map((value, index) => <li key={index}>{value}</li>) : <Fragment />}
            </ul>
        );
    }

    render() {
        return (
            <div className="feature-background"
                style={{
                    backgroundColor: this.props.style?.backgroundColor?.toString(),
                    color: this.props.style?.fontColor
                    //글자색 예외 코드...어두운 색상을 자동으로 인식하게 할 수 있을까?
                }}>
                {this.renderContent()}
            </div>
        );
    }
}

export default FeatureElement;