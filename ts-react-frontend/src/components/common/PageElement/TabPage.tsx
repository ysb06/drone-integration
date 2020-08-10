import React, { Component } from 'react';

interface ITabPageProps {
    tabPageTitle: string[]
}

class TabPage extends Component<ITabPageProps> {
    render() {
        return (
            <div className="page-element">
                <div className="tab-page">
                    <div className="tab-switch-button">
                        <div>◀</div>
                    </div>
                    <div className="content">
                        <div className="navigation">
                            {this.props.tabPageTitle.map<JSX.Element>((text, index) =>
                                <div className="tab-selector" key={index}>{text}</div>
                            )}
                        </div>
                        <div className="tab-element"></div>
                    </div>
                    <div className="tab-switch-button">
                        <div>▶</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabPage;