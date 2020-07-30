import React, { Component } from 'react';
import './scoreboard.css';
import { RouteComponentProps } from 'react-router-dom';

interface IScoreboardState {
    round: number,
    p1Time: Date,
    p2Time: Date,
    p1Score: number,
    p2Score: number
}

class Scoreboard extends Component<RouteComponentProps, IScoreboardState> {
    state: IScoreboardState = {
        round: 1,
        p1Time: new Date(1000),
        p2Time: new Date(1000),
        p1Score: 0,
        p2Score: 0
    }

    render() {
        return (
            <div>
                <div className="round">{this.state.round}</div>
                <div className="time-board">
                    <div className="p1-time">{this.state.p1Time.getMinutes() + ":" + this.state.p1Time.getSeconds()}</div>
                    <div className="p2-time">{this.state.p2Time.getMinutes() + ":" + this.state.p2Time.getSeconds()}</div>
                </div>
                <div className="score-board">
                    <div className="divider">:</div>
                    <div className="p1-score">{this.state.p1Score}</div>
                    <div className="p2-score">{this.state.p2Score}</div>
                </div>
            </div>
        );
    }
}

export default Scoreboard;