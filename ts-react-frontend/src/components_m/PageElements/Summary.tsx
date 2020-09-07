import React, { Component, Fragment } from 'react';
import PageButton from './PageButton';

//각 부분의 사이즈는 CSS에서 조정
interface ISummaryProps {
    title?: string,
    content: string,
    pictureSrc?: string,
    videoSrc?: string,
    videoAutoPlay?: boolean,
    buttonText?: string,
    linkTo?: string,
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

class Summary extends Component<ISummaryProps> {
    renderMedia(): JSX.Element {
        if (this.props.pictureSrc) {
            return (<img src={this.props.pictureSrc} alt="Summary" />)
        } else if (this.props.videoSrc) {
            return (<video src={this.props.videoSrc} autoPlay={this.props.videoAutoPlay} loop />)
        } else {
            return (<Fragment></Fragment>);
        }
    }

    render() {
        return (
            <div className="summary">
                {this.props.title ?
                    <div className="summary-title"><h2>{this.props.title}</h2></div> :
                    <Fragment />
                }
                <div className="summary-content">
                    {this.renderMedia()}
                    <p>{this.props.content}</p>
                    <div className="summary-button-container">
                        {
                            this.props.buttonText ?
                                (<PageButton text={this.props.buttonText} linkTo={this.props.linkTo} onClick={this.props.onClick} />) :
                                (<Fragment />)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Summary;