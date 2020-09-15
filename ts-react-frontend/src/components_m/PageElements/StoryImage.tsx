import React, { Component, Fragment } from 'react';

export interface IStoryImageProps {
    src: string,
    title?: string,
    alt?: string
}

class StoryImage extends Component<IStoryImageProps> {
    //<br /> 태그 또는 \n 사용 가능하도록 설정
    render() {
        return (
            <div className="story-image">
                <img src={this.props.src} alt={this.props.alt ? this.props.alt : "story-image"} />
                {this.props.title ? <div className="media-title">{this.props.title}</div> : <Fragment />}
            </div>
        );
    }
}

export default StoryImage;