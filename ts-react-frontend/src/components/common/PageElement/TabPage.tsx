import React, { Component } from 'react';

interface ITabPageProps {
    tabPageTitle: string[]
    tabContents: JSX.Element[]
}

interface ITabPageState {
    currentTab: number
}

class TabPage extends Component<ITabPageProps, ITabPageState> {
    state = {
        currentTab: 0
    }
    constructor(props: ITabPageProps) {
        super(props);
        this.onNextTab = this.onNextTab.bind(this);
        this.onPrevTab = this.onPrevTab.bind(this);
    }

    onNextTab(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if(this.state.currentTab < this.props.tabContents.length - 1) {
            this.setState({currentTab: this.state.currentTab + 1});
        }
    }

    onPrevTab(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if(this.state.currentTab > 0) {
            this.setState({currentTab: this.state.currentTab - 1});
        }
    }

    render() {
        return (
            <div className="page-element">
                <div className="tab-page">
                    <div className="tab-switch-button" onClick={this.onPrevTab}>
                        <div>◀</div>
                    </div>
                    <div className="container">
                        <div className="navigation">
                            {this.props.tabPageTitle.map<JSX.Element>((text, index) => {
                                if (this.state.currentTab === index) {
                                    return (
                                        <div className="selector-selected" key={index}>
                                            {text}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div className="selector-not-selected" key={index} onClick={() => {this.setState({currentTab: index})}}>
                                            {text}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                        <div className="content">
                            {this.props.tabContents[this.state.currentTab]}
                        </div>
                    </div>
                    <div className="tab-switch-button" onClick={this.onNextTab}>
                        <div>▶</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TabPage;