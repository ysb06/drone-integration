import React, { Component, Fragment } from 'react';

interface ISpecTableProps {
    title: string,
    content: {
        name: string,
        value: string
    }[],
    pictureSrc?: string,
    videoSrc?: string,
    videoAutoPlay?: boolean
}

class SpecTable extends Component<ISpecTableProps> {
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
                <div className="spec-table">
                    <h3>{this.props.title}</h3>
                    <table>
                        <tbody>
                            {this.props.content.map((element, index) => {
                                if (index === 0) {
                                    return (
                                        <tr key={index}>
                                            <td className="title-column">{element.name}</td>
                                            <td className="content-column">{element.value}</td>
                                            <td className="image-column" rowSpan={this.props.content.length}>{this.renderMedia()}</td>
                                        </tr>
                                    );
                                }
                                else {
                                    return (
                                        <tr key={index}>
                                            <td className="title-column">{element.name}</td>
                                            <td className="content-column">{element.value}</td>
                                        </tr>
                                    );
                                }
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default SpecTable;