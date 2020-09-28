import React, { Component, Fragment } from 'react';
import './ImageSection.css';

//각 부분의 사이즈는 CSS에서 조정
interface IImageSectionProps {
    title?: string,
    pictureSrc?: string,
    videoSrc?: string,
    videoAutoPlay?: boolean,
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

class ImageSection extends Component<IImageSectionProps> {
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
            <div className="image-section">
                {this.props.title ?
                    <div className="summary-title"><h2>{this.props.title}</h2></div> :
                    <Fragment />
                }
                <div className="image-section-content">
                    {this.renderMedia()}
                </div>
            </div>
        );
    }
}

export default ImageSection;