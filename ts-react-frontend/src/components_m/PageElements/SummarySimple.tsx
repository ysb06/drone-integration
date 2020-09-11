import React, { Component, Fragment } from 'react';
import PageButton from './PageButton';

//각 부분의 사이즈는 CSS에서 조정
interface ISummarySimpleProps {
    title?: string,
    subtitle?: string,
    buttonText?: string,
    linkTo?: string,
    onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void,
}

class SummarySimple extends Component<ISummarySimpleProps> {
    render() {
        // 수정 필요. 코드 더러움
        return (
            <div className="page-element">
                <div className="summary-simple">
                    <div className="summary-simple-title"><h2>{this.props.title}</h2></div>
                    <div className="summary-simple-subtitle">{this.props.subtitle}</div>
                    <div className="summary-simple-button">
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

export default SummarySimple;