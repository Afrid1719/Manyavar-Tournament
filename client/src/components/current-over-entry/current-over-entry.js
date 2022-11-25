import './current-over-entry.scss';
import { Component } from 'react';
import OversRecord from '../overs-record/overs-record';

export default class CurrentOverEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBall: null,
            currentOver: 0
        }
        this.balls = [];
        let ballInput = <input type="text" value={null} />;
        for (let i = 1; i <= 6; i++) {
            this.balls.push(ballInput);
        }
        this.overs = [
            ["w", "Nb", "2", "4", "0", "2"],
            ["w", "Nb", "2", "4", "0", "2"],
            ["0", "2", "6", "1", "wd", "2", "2"],
            ["w", "Nb2", "2", "4", "0", "2"],
        ];
    }

    render() {
        return (
            <div className="p-3 mt-3 current-over-container">
                <div className="last-3-overs row">
                    <p className="fs-5 fw-semibold">Last 3 Overs</p>
                    <div className="d-flex col-12 flex-wrap">
                        <OversRecord over={this.overs[this.overs.length - 3]?? null} />
                        <OversRecord over={this.overs[this.overs.length - 2]?? null} />
                        <OversRecord over={this.overs[this.overs.length - 1]?? null} />
                    </div>
                </div>
                <div className="current-over mt-2 row">
                    <p className="fs-5 fw-semibold">This Over</p>
                    <div className="balls-container d-flex ">
                        {this.balls.map((el, index) => (<div className="balls" key={index}>{el}</div>))}
                    </div>
                    <div className="actions-row d-flex">
                        <button type="button" onClick="">Save Ball</button>
                        <button type="button" onClick="">Complete Over</button>
                        <button type="button" onClick="">Add New Ball</button>
                    </div>
                </div>

            </div>
        );
    }
    // TODO: Dbl click to edit a ball in the current over
    // TODO: Save ball button
    // TODO: Over complete button
    // TODO: Add New ball button
}