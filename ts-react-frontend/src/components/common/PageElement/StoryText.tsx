import React, { Component } from 'react';

interface IStoryTextProps {
    text: string
}

class StoryText extends Component<IStoryTextProps> {
    //<br /> 태그 또는 \n 사용 가능하도록 설정
    render() {
        return (
            <div className="story-text">
                <p>{this.props.text}</p>
            </div>
        );
    }
}

export default StoryText;