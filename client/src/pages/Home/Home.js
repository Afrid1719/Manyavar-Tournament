import moment from "moment";
import './home.scss';
export default function Home() {
    let matchesData = [
        {
            matchNumber: 1,
            teamA: "England",
            teamB: "India",
            runsA: 234,
            runsB: 211,
            wicketsA: 4,
            wicketsB: 5,
            ballsA: 120,
            ballsB: 118,
            date: new Date(2022, 11, 23, 13, 0),
            secondInnings: "India", // String | null,
            totalBalls: 120
        },
        {
            matchNumber: 2,
            teamA: "Pakistan",
            teamB: "India",
            runsA: 234,
            runsB: 211,
            wicketsA: 4,
            wicketsB: 5,
            ballsA: 120,
            ballsB: 118,
            date: new Date(2022, 11, 24, 13, 0),
            secondInnings: "India", // String | null,
            totalBalls: 120
        },
        {
            matchNumber: 1,
            teamA: "England",
            teamB: "India",
            runsA: 234,
            runsB: 211,
            wicketsA: 4,
            wicketsB: 5,
            ballsA: 120,
            ballsB: 118,
            date: new Date(2022, 11, 23, 13, 0),
            secondInnings: "India", // String | null,
            totalBalls: 120
        },
        {
            matchNumber: 1,
            teamA: "England",
            teamB: "India",
            runsA: 234,
            runsB: 211,
            wicketsA: 4,
            wicketsB: 5,
            ballsA: 120,
            ballsB: 118,
            date: new Date(2022, 11, 23, 13, 0),
            secondInnings: "India", // String | null,
            totalBalls: 120
        },
        {
            matchNumber: 1,
            teamA: "England",
            teamB: "India",
            runsA: 234,
            runsB: 211,
            wicketsA: 4,
            wicketsB: 5,
            ballsA: 120,
            ballsB: 118,
            date: new Date(2022, 11, 23, 13, 0),
            secondInnings: "India", // String | null,
            totalBalls: 120
        },
        {
            matchNumber: 1,
            teamA: "England",
            teamB: "India",
            runsA: 234,
            runsB: 211,
            wicketsA: 4,
            wicketsB: 5,
            ballsA: 120,
            ballsB: 118,
            date: new Date(2022, 11, 23, 13, 0),
            secondInnings: "India", // String | null,
            totalBalls: 120
        },
        {
            matchNumber: 1,
            teamA: "England",
            teamB: "India",
            runsA: 234,
            runsB: 211,
            wicketsA: 4,
            wicketsB: 5,
            ballsA: 120,
            ballsB: 118,
            date: new Date(2022, 11, 23, 13, 0),
            secondInnings: "India", // String | null,
            totalBalls: 120
        },
        {
            matchNumber: 1,
            teamA: "England",
            teamB: "India",
            runsA: 234,
            runsB: 211,
            wicketsA: 4,
            wicketsB: 5,
            ballsA: 120,
            ballsB: 118,
            date: new Date(2022, 11, 23, 13, 0),
            secondInnings: "India", // String | null,
            totalBalls: 120
        }
    ];

    let matches = matchesData.map((item, index) => <MatchCard data={item} key={`match-${index}`} />);
    return (
        <div className="container">
            <div className="cards-container py-3">
                {matches}
            </div>
        </div>
    );
}

function MatchCard({data}) {
    return (
        <div className="card match-card m-3">
            <div className="card-header text-center">
                <h5>{`Match ${data.matchNumber}`}</h5>
                <span>{moment(data.date).format("MMMM Do YYYY, h:mm a")}</span>
            </div>
            <div className="card-body">
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="text-end">{data.teamA}</td>
                            <td style={{width: "10px"}}>vs</td>
                            <td className="text-start">{data.teamB}</td>
                        </tr>
                        <tr>
                            <td className="text-end">{data.runsA}-{data.wicketsA}</td>
                            <td></td>
                            <td className="text-start">{data.runsB}-{data.wicketsB}</td>
                        </tr>
                        <tr>
                            <td className="text-end">{`${toOvers(data.ballsA)} overs`}</td>
                            <td></td>
                            <td className="text-start">{`${toOvers(data.ballsB)} overs`}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="footer">
                    {/*TODO: Result of ended match*/}
                    {!!data.secondInnings && `${data.secondInnings} needs ${toWinData(data).runs} runs from ${toWinData(data).balls} balls.`}
                </div>
            </div>
        </div>
    );
}

function toOvers(balls) {
    let deci = Math.floor(balls/6);
    let preci = balls%6;
    return `${deci}.${preci}`;
}

function toWinData(data) {
    if (data.secondInnings.toLowerCase() === data.teamA.toLowerCase()) {
        return {
            runs: data.runsB - data.runsA + 1,
            balls: data.totalBalls - data.ballsA
        };
    }

    return {
        runs: data.runsA - data.runsB + 1,
        balls: data.totalBalls - data.ballsB
    };
}