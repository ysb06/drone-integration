import React, { Component } from 'react';

interface IStoryTitleProps {
    text: string
}

class StoryTitle extends Component<IStoryTitleProps> {
    render() {
        return (
            <div className="story-title">
                <h3>{this.props.text}</h3>
            </div>
        );
    }
}

export default StoryTitle;