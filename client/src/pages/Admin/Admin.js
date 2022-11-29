import './admin.scss';

import {useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function Admin({isLoggedIn, setIsLogin}) {
    const loginRef = useRef(null);
    let [username, setUsername] = useState(""); 
    let [password, setPassword] = useState("");
    let [login, setLogin] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        const user = "admin";
        const pass = "abcd";
        console.log(username);
        console.log(password);

        let validateUser = new Promise((resolve, reject) => {
            if (username === user && password === pass) resolve({success: true});
            else resolve({success: false});
        });

        validateUser
            .then(response => {
                if (response.success) {
                    setIsLogin(() => true);
                    setLogin(() => true);
                    navigate('/');
                } else {
                    setIsLogin(() => false);
                    setLogin(() => false);
                    loginRef.current.classList.add('error-shake');
                    setTimeout(() => {
                        loginRef.current.classList.remove('error-shake');
                    }, 600);   
                }
            })
            .catch(err => {
                console.log(err);
            })
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
            <div className="bg"></div>
            <div className="container">
                <div className="col-5 mx-auto login-container" ref={loginRef}>  
                    <div className="card text-center">
                        <div className="card-body">
                        <img className="img-fluid main-logo" alt="Manyavar Logo" src="https://www.exchange4media.com/news-photo/98693-manyavarf.jpg" />
                        <h2 className="card-title mt-3">Manyavar Blah Blah</h2>
                            <form className="login-form row mx-auto my-5">
                                <div className="col-6 offset-3">
                                    <p className="mb-4 text-start">Please login to your account</p>
                                    {login !== false ? '': (<span className="text-danger">Incorrect username or password</span>)}
                                </div>
                                <div className="row offset-3 col-6">
                                    <input type="text" className="col-6 form-control mb-4" id="username" required placeholder="Username" value={username} onChange={usernameChanged}/>
                                    <input type="password" className="col-6 form-control mb-4" id="password" required placeholder="Password" value={password} onChange={passwordChanged} />
                                    <button className="btn btn-primary btn-block w-100 mb-3" type="button" onClick={handleSubmit}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
}
