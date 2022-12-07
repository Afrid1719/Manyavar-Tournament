import BounceLoader from 'react-spinners/BounceLoader';
import imgPath from './../../assets/images/admin-login-header.png';
import './admin.scss';

import {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { authenticate } from '../../endpoints/admin';

export default function Admin({setIsLogin}) {
    const loginRef = useRef(null);
    let [username, setUsername] = useState(""); 
    let [password, setPassword] = useState("");
    let [login, setLogin] = useState(null);
    let [isLoading, setLoading] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setLoading(true);

        let response = await authenticate({username: username, password: password});

        if (response.message === true) {
            setIsLogin(() => true);
            setLogin(() => true);
            setLoading(false);
            navigate('/');
        } else {
            setIsLogin(() => false);
            setLogin(() => false);
            setLoading(false);
            loginRef.current.classList.add('error-shake');
            setTimeout(() => {
                loginRef.current.classList.remove('error-shake');
            }, 600);   
        }
        // TODO: Call login endpoint
    };

    const usernameChanged = (e) => {
        setUsername(e.target.value)
        setLogin(null);
    };

    const passwordChanged = (e) => {
        setPassword(e.target.value)
        setLogin(null);
    }

    return (
        <div className="Login d-flex justify-content-center align-items-center">
            {
                isLoading && (
                    <div className="spinner-container">
                        <BounceLoader
                            color="#dc3545"
                            loading
                            size={50}
                            speedMultiplier={1.5}
                        />
                    </div>
                )
            }
            <div className="bg"></div>
            <div className="container">
                <div className="col-5 mx-auto login-container" ref={loginRef}>  
                    <div className="card text-center">
                        <div className="card-body">
                        <img className="img-fluid main-logo" alt="Manyavar Logo" src={imgPath} />
                        <h2 className="card-title mt-3">Admin</h2>
                            <form className="login-form row mx-auto my-5">
                                <div className="col-6 offset-3">
                                    <p className="mb-4 text-start">Please login to your account</p>
                                    {login !== false ? '': (<span className="text-danger">Incorrect username or password</span>)}
                                </div>
                                <div className="row offset-3 col-6">
                                    <input type="text" className="col-6 form-control mb-4" id="username" required placeholder="Username" value={username} onChange={usernameChanged}/>
                                    <input type="password" className="col-6 form-control mb-4" id="password" required placeholder="Password" value={password} onChange={passwordChanged} />
                                    <button className="btn login-btn btn-block w-100 mb-3" type="button" onClick={handleSubmit}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}
