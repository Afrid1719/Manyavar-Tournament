import { useContext, useState } from "react";
import { AuthContext } from "../../App";
import './teams.scss';

export function Teams() {
    const auth = useContext(AuthContext);
    // TODO: fetch all the teams

    let teamsData = [
        {
            id: 1,
            name: 'India',
            players: [
                {id: 1, name: 'A'},
                {id: 2, name: 'B'},
                {id: 3, name: 'C'},
                {id: 4, name: 'D'}
            ] 
        },
        {
            id: 2,
            name: 'Pakistan',
            players: []
        }
    ];

    const teams = teamsData.map((team, index) => <TeamRow key={`team-${index}`} data={team} />) 

    return (
        <div className="teams-page p-3">
            <h2 className="teams-header text-center">Teams</h2>
            <div className="container">
                {auth.isLogin.login && <AddTeam />}
                <table className="table" width="100%">
                    <thead className="thead-primary">
                        <tr className="row">
                            <th scope="col" className="col-2">#</th>
                            <th scope="col" className={auth.isLogin.login ? "col-7" : "col-10"}>Team Name</th>
                            {auth.isLogin.login && <th scope="col" className="col-3">Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {teams}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function PlayerNameInput({serial, data}) {
    return (
        <tr>
            <th scope="row">{serial}</th>
            <td><input type="text" value={!!data ? data.name : ''} /></td>
        </tr>
    );
}

function TeamRow({data}) {
    let [isEdit, setIsEdit] = useState(false);
    const auth = useContext(AuthContext);
    const openEdit = () => {
        setIsEdit(true);
    }

    const closeEdit = () =>{
        setIsEdit(false);
    }
    
    const players = [];
    for (let i = 0; i < 15; i++) {
        players.push(<PlayerNameInput key={i} serial={i+1} data={data.players[i] ?? data.players[i]}/>);
    }

    return (
        <>
            <tr className="row">
                <th scope="row" className="col-2">{data.id}</th>
                <td className={auth.isLogin.login ? "col-7 fw-bold" : "col-10 fw-bold"}>{data.name}</td>
                {
                    auth.isLogin.login && 
                    <td className="col-3">  
                        <div className="actions d-flex justify-content-start">
                            <button className="btn btn-primary me-2" type="button" onClick={openEdit}>Edit</button>
                            <button className="btn btn-danger" type="button" onClick="">Delete</button>
                        </div>
                    </td>
                }
            </tr>
            {
                isEdit && auth.isLogin.login && 
                <tr>
                    <td>
                        <form className="container border border-4 border-warning">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Player Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {players}
                                </tbody>
                            </table>
                            <div className="form-actions-row mx-auto p-3 d-flex justify-content-center">
                                <button className="btn btn-success me-2" type="button" onClick="">Save</button>
                                <button className="btn btn-secondary" type="button" onClick={closeEdit}>Close</button>
                            </div>
                        </form>
                    </td>
                </tr>
            }
        </>
    );
}

function AddTeam() {
    let [addTeamRequested, changeAddTeamRequested] = useState(false);
    let [teamName, setTeamName] = useState('');
    
    const submitHandler = (e) => {
        e.preventDefault();
        
    };
    
    return (
        <form onSubmit={submitHandler} className={addTeamRequested ? "border border-2 shadow shadow-primary border-primary p-3 m-3" : "p-3 m-3"}>
            <div className="w-100 row">
                {
                    addTeamRequested && 
                    <div className="col-12 col-lg-8">
                        <div class="form-group">
                            <input type="text" className="form-control" placeholder="Team" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                        </div>
                    </div>
                }
                <div className="col-12 col-lg-4">
                    {
                        addTeamRequested ?
                        (
                            <>
                                <button className="btn btn-primary" type="submit">Save Team</button>
                                <button className="btn btn-primary ms-3" type="button" onClick={() => changeAddTeamRequested(false)}>Close</button>
                            </>
                        ) :
                        <button className="btn btn-primary" type="button" onClick={() => changeAddTeamRequested(true)}>Add Team</button>
                    }
                </div>
            </div>
        </form>
    );
}