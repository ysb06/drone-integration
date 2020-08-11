import React, { Component, Fragment } from 'react';

interface IListProps {
    title: string,
    textList: string[],
    pictureSrc?: string,
    videoSrc?: string,
    videoAutoPlay?: boolean,
}

class List extends Component<IListProps> {
    renderMedia(): JSX.Element {
        if (this.props.pictureSrc) {
            return (<img src={this.props.pictureSrc} alt="Summary" />)
        } else if (this.props.videoSrc) {
            return (<video src={this.props.videoSrc} autoPlay={this.props.videoAutoPlay} controls loop />)
        } else {
            return (<Fragment></Fragment>);
        }
    }

    render() {
        return (
            <div className="page-element">
                <h2>{this.props.title}</h2>
                <div className="list-content">
                    <ul>
                        {this.props.textList.map<JSX.Element>((text: string, index: number) =>
                            <li key={index}><p>{text}</p></li>
                        )}
                    </ul>
                    {this.renderMedia()}
                </div>
            </div>
        );
    }
}

export default List;