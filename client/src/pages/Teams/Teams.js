import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../App";
import { httpCreateTeam, httpDeleteTeam, httpGetAllTeams } from "../../endpoints/teams";
import './teams.scss';

export function Teams() {
    const auth = useContext(AuthContext);
    let [teamsData, setTeamsData] = useState([]);

    useEffect(() => {
        httpGetAllTeams()
            .then(res => setTeamsData(res.data))
            .catch(err => {alert(err)})
    }, []);

    const teams = teamsData.map((team, index) => <TeamRow key={`team-${index}`} index={index+1} data={team} />); 

    const addNewTeam = async (data) => {
        try {
            let res = await httpCreateTeam(data);
            console.log(res);
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div className="teams-page p-3">
            <h2 className="teams-header text-center">Teams</h2>
            <div className="container">
                {auth.isLogin.login && <AddTeam teams={teamsData} addTeam={addNewTeam} />}
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

function TeamRow({index, data}) {
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
        players.push(<PlayerNameInput key={i} serial={i+1} data={data?.players[i] ?? data?.players[i]}/>);
    }

    const deleteHandler = async (e) => {
        const id = e.target.dataset?.id;
        if (!id) {
            e.preventDefault();
            alert('Unable to delete due to some error!!');
        } else {
            try {
                await httpDeleteTeam(id);
            } catch (e) {
                e.preventDefault();
                alert(e);
            }
        }
    }

    return (
        <>
            <tr className="row">
                <th scope="row" className="col-2">{index}</th>
                <td className={auth.isLogin.login ? "col-7 fw-bold" : "col-10 fw-bold"}>{data.name}</td>
                {
                    auth.isLogin.login && 
                    <td className="col-3">  
                        <div className="actions d-flex justify-content-start">
                            <button className="btn btn-primary me-2" type="button" onClick={openEdit}>Edit</button>
                            <form data-id={data._id} onSubmit={deleteHandler}>
                                <button className="btn btn-danger" type="submit">Delete</button>
                            </form>
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

function AddTeam({teams, addTeam}) {
    let [addTeamRequested, changeAddTeamRequested] = useState(false);
    let [teamName, setTeamName] = useState('');
    
    const submitHandler = async (e) => {
        if (!!teamName) {               
            let teamExists = teams.findIndex((val) => val.name === teamName);
            if (teamExists === -1) {
                addTeam(teamName)       
            } else {
                alert('Team already exists!!');
            }   
            changeAddTeamRequested(false);
            setTeamName('');
        } else {
            e.preventDefault();
        }
    };
    
    return (
        <form onSubmit={submitHandler} className={addTeamRequested ? "border border-2 shadow shadow-primary border-primary p-3 m-3" : "p-3 m-3"}>
            <div className="w-100 row">
                {
                    addTeamRequested && 
                    <div className="col-12 col-lg-8">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Team" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
                        </div>
                    </div>
                }
                <div className="col-12 col-lg-4">
                    {
                        addTeamRequested ?
                        (
                            <>
                                <button className="btn btn-primary" type="submit" onClick={() => {}}>Save Team</button>
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