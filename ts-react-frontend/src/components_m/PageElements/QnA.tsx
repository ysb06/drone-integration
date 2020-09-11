import React, { Component } from 'react';

interface IQnAProps {
    title: string,
    content: string
}

class QnA extends Component<IQnAProps> {
    render() {
        return (
            <div className="qna">
                <h3>{this.props.title}</h3>
                <p>
                    {this.props.content}
                </p>
            </div>
        );
    }
}

export default QnA;