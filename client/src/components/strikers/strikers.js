import {Component} from 'react';

export default class Strikers extends Component {
    constructor(props) {
        super(props);

        this.batters = [
            {
                name: "V Kohli",
                runs: 54,
                balls: 23,
                four: 3,
                six: 3 
            },
            {
                name: "M S Dhoni",
                runs: 14,
                balls: 5,
                four: 1,
                six: 1 
            }
        ];
    
        this.bowler = [
            {
                name: "A Russell",
                overs: 1.4,
                runs: 22,
                dots: 1,
                wickets: 0,
                economy: 13.2
            }
        ];
    }
    render() {
        return (
            <div className="card on-field-batters">
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <p className="team fs-3 fw-bold">India</p>
                            <table className="table text-end">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Runs</th>
                                        <th scope="col">Balls</th>
                                        <th scope="col">Fours</th>
                                        <th scope="col">Sixes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.batters.map((item, i) => {
                                        return (
                                            <tr key={i}>
                                                <th scope="row" className="text-start"><span className="badge text-bg-primary">{item.name}</span></th>
                                                <td>{item.runs}</td>
                                                <td>{item.balls}</td>
                                                <td>{item.four}</td>
                                                <td>{item.six}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-6">
                            <p className="team fs-3 fw-bold">West Indies</p>
                            <table className="table text-end">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Overs</th>
                                        <th scope="col">Runs</th>
                                        <th scope="col">Dots</th>
                                        <th scope="col">Wkts</th>
                                        <th scope="col">Eco</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="text-start"><span className="badge text-bg-primary">{this.bowler[0].name}</span></th>
                                        <td>{this.bowler[0].overs}</td>
                                        <td>{this.bowler[0].runs}</td>
                                        <td>{this.bowler[0].dots}</td>
                                        <td>{this.bowler[0].wickets}</td>
                                        <td>{this.bowler[0].economy}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}