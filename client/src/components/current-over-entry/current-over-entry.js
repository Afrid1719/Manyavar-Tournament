import './current-over-entry.scss';
import { Component, createRef } from 'react';
import OversRecord from '../overs-record/overs-record';
import { saveBall } from '../../endpoints/scoring';

export default class CurrentOverEntry extends Component {
    constructor(props) {
        super(props);
        this.addNewBall = this.addNewBall.bind(this);
        this.saveBall = this.saveBall.bind(this);
        this.ballContainerRef = createRef();
        this.ballInput = <input type="text" value={null}/>;
        this.overs = [
            ["w", "Nb", "2", "4", "0", "2"],
            ["w", "Nb", "2", "4", "0", "2"],
            ["0", "2", "6", "1", "wd", "2", "2"],
            ["w", "Nb2", "2", "4", "0", "2"],
        ];
        this.state = {
            currentOver: 0,
        };
    }

    addNewBall() {
        const fragment = document.createDocumentFragment();
        const input = document.createElement('input');
        const ball = document.createElement('div');
        ball.classList.add('ball');
        input.type = 'text';
        input.value = null;
        ball.appendChild(input);
        fragment.appendChild(ball);
        this.ballContainerRef.current.appendChild(fragment);
    }

    async saveBall(e) {
        e.preventDefault();
        let balls = this.ballContainerRef.current.querySelectorAll('.ball > input');
        balls = [...balls];
        console.log('balls', balls[0].value);
        const valToSend = balls[balls.length - 1].value;
        try{
            let response = await saveBall({
                run: valToSend,
                striker: 1, // striker's ID
                matchId: 1,
                teamId: 2    
            });
            if (response.status === 401) {
                alert('Please login as admin!');
            } else if (response.status === 200) {
                this.setState((prevState) => ({
                    currentOver: prevState.currentOver + valToSend
                }));
            } else {
                alert('Something went wrong. Please try again!!');
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="card mt-3">
                <div className="card-body">
                    <div className="p-2 current-over-container">
                        <div className="last-3-overs row">
                            <p className="fs-5 fw-semibold mb-2">Last 3 Overs</p>
                            <div className="d-flex col-12 flex-wrap">
                                <OversRecord over={this.overs[this.overs.length - 3]?? null} />
                                <OversRecord over={this.overs[this.overs.length - 2]?? null} />
                                <OversRecord over={this.overs[this.overs.length - 1]?? null} />
                            </div>
                        </div>
                        <form className="current-over mt-2 row" onSubmit={this.completeOver}>
                            <p className="fs-5 fw-semibold my-2">This Over - {this.state.currentOver}</p>
                            <div className="balls-container d-flex flex-wrap" ref={this.ballContainerRef}>
                                <div className="ball">{this.ballInput}</div>
                            </div>
                            <div className="actions-row d-flex justify-content-center p-3">
                                <button type="button" className="btn" onClick={this.saveBall}>Save Ball</button>
                                <button type="submit" className="btn mx-2">Complete Over</button>
                                <button type="button" className="btn" onClick={this.addNewBall}>Add New Ball</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    // TODO: Save ball button
    // TODO: Over complete button
    // TODO: Add New ball button
}