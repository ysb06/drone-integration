import React, { Component } from 'react';

interface IStoryVideoProps {
    src: string,
    title?: string,
    width?: number,
    height?: number
}

class StroyVideo extends Component<IStoryVideoProps> {
    render() {
        if (this.props.src.includes('www.youtube.com')) {
            return (
                <div className="story-video">
                    <iframe
                        title="drone-jacket"
                        width={this.props.width ? this.props.width : ""}
                        height={this.props.height ? this.props.height : ""}
                        src={this.props.src + "?rel=0"}
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                    <div className="media-title">{this.props.title ? this.props.title : ""}</div>

                </div>
            );
        } else {
            return (
                <div className="story-video">
                    <video src={this.props.src} />
                    <div className="media-title">{this.props.title ? this.props.title : ""}</div>
                </div>
            );
        }
    }
}

export default StroyVideo;