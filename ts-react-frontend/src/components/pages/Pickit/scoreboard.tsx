import React, { Component } from 'react';
import './scoreboard.css';
import { RouteComponentProps } from 'react-router-dom';

const Final_Round = 2;
const Round1_Time = 1800;
const Round2_Time = 1200;

interface IScoreboardState {
    round: number,
    turn: GameTurn,
    targetTime?: Date,
    p1Time: Date,
    p2Time: Date,
    p1Score: number,
    p2Score: number
}

enum GameTurn {
    P1, P2, End
}

class Scoreboard extends Component<RouteComponentProps, IScoreboardState> {
    constructor(props: RouteComponentProps) {
        super(props);

        this.onChangeP1Score = this.onChangeP1Score.bind(this);
        this.onChangeP2Score = this.onChangeP2Score.bind(this);
        this.activateRound = this.activateRound.bind(this);
        this.refreshBoard = this.refreshBoard.bind(this);
        this.resetRound = this.resetRound.bind(this);
    }
    state: IScoreboardState = {
        round: 1,
        turn: GameTurn.P1,
        p1Time: new Date(Round1_Time),
        p2Time: new Date(Round1_Time),
        p1Score: 0,
        p2Score: 0
    }

    activateRound(event: React.MouseEvent<HTMLInputElement, MouseEvent>) {
        if (this.state.round > Final_Round) {
            alert('게임이 이미 종료되었습니다.');
            return;
        }

        this.setState({
            targetTime: new Date(Date.now() + (this.state.round === 1 ? Round1_Time : Round2_Time))
        });
        setTimeout(this.refreshBoard, 500);

        let currentTurn: GameTurn = this.state.turn;
        console.log('Round ' + this.state.round + ', Player ' + (currentTurn + 1) + ' turn');
    }

    refreshBoard() {
        let remainedTime: number = 0;
        if(this.state.targetTime) {
            remainedTime = this.state.targetTime.getTime() - Date.now();
        } else {
            alert('Time not set error');
            return;
        }
        console.log('refresh!!: ' + remainedTime);

        if(remainedTime > 0) {
            switch (this.state.turn) {
                case GameTurn.P1:
                    this.setState({p1Time: new Date(remainedTime)});
                    break;
                case GameTurn.P2:
                    this.setState({p2Time: new Date(remainedTime)});
                    break;
                case GameTurn.End:
                    alert('게임을 초기화했습니다.');
                    return;
                default:
                    alert('Unknown Turn error');
                    return;
            }
            
            setTimeout(this.refreshBoard, 500);
        } else {    // 게임 각 턴 종료
            let ding = new Audio('sound/page-pickit-1.mp3');
            ding.play();

            let temp: GameTurn = this.state.turn + 1
            if (temp >= GameTurn.End) {
                temp = GameTurn.P1;
            }
            this.setState({
                round: (this.state.turn < 1 ? this.state.round : this.state.round + 1),
                turn: temp
            });
        }
    }

    resetRound(event: React.MouseEvent<HTMLInputElement, MouseEvent>) {
        this.setState({
            round: 1,
            turn: GameTurn.P1,
            p1Time: new Date(Round1_Time),
            p2Time: new Date(Round1_Time),
        })
    }

    onChangeP1Score(event: React.ChangeEvent<HTMLInputElement>) {
        let score = Number.parseInt(event.target.value);
        if (isNaN(score)) {
            this.setState({ p1Score: 0 });
        } else {
            this.setState({ p1Score: score });
        }
    }

    onChangeP2Score(event: React.ChangeEvent<HTMLInputElement>) {
        let score = Number.parseInt(event.target.value);
        if (isNaN(score)) {
            this.setState({ p2Score: 0 });
        } else {
            this.setState({ p2Score: score });
        }
    }

    render() {
        return (
            <div className="score-app">
                <div className="time-board">
                    <div className="time-content">
                        <span className="score-text">
                            {this.state.p1Time.getMinutes() + ":" +
                                (this.state.p1Time.getSeconds() < 10 ? "0" + this.state.p1Time.getSeconds() : this.state.p1Time.getSeconds())}
                        </span>
                    </div>
                    <div className="round">
                        <span className="round-title">Round</span>
                        <span className="round-content">{this.state.round > Final_Round? "종료" : this.state.round}</span>
                    </div>
                    <div className="time-content">
                        <span className="score-text">
                            {this.state.p2Time.getMinutes() + ":" +
                                (this.state.p2Time.getSeconds() < 10 ? "0" + this.state.p2Time.getSeconds() : this.state.p2Time.getSeconds())}
                        </span>
                    </div>
                </div>
                <div className="score-board">
                    <div className="score-content">
                        <span className="score-text">
                            <input type="text" onChange={this.onChangeP1Score} value={this.state.p1Score} />
                        </span>
                    </div>
                    <div className="divider">
                        <span className="score-text">:</span>
                    </div>
                    <div className="score-content">
                        <span className="score-text">
                            <input type="text" onChange={this.onChangeP2Score} value={this.state.p2Score} />
                        </span>
                    </div>
                </div>
                <form className="control-panel">
                    <input type="button" value="리셋" onClick={this.resetRound} />
                    <input type="button" value="시작" onClick={this.activateRound} />
                </form>
            </div>
        );
    }
}

export default Scoreboard;