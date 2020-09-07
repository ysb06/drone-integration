import React, { Component, Fragment } from 'react';

interface IListPartProps {
    title?: string,
    textList: string[],
    pictureSrc?: string,
    videoSrc?: string,
    videoAutoPlay?: boolean,
}

class ListPart extends Component<IListPartProps> {
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
            <Fragment>
                {this.props.title ? <h2>{this.props.title}</h2> : <Fragment></Fragment>}
                <div className="list-content">
                    <ul style={!this.props.pictureSrc || !this.props.videoSrc? {width: "100%"} : {}}>
                        {this.props.textList.map<JSX.Element>((text: string, index: number) =>
                            <li key={index}><p>{text}</p></li>
                        )}
                    </ul>
                    {this.renderMedia()}
                </div>
            </Fragment>
        );
    }
}

export default ListPart;