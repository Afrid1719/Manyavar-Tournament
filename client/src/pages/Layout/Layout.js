import {Outlet, Link, useNavigate} from "react-router-dom";
import moment from "moment";
import "./layout.scss";
import { logoutAdmin } from "../../endpoints/admin";
import { useContext } from "react";
import { AuthContext } from "../../App";

export default function Layout() {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    const handleLogout = async () => {
        let response = await logoutAdmin();

        if (response.message === true) {
            auth.logout();
            navigate('/');
        } else {
            alert('Unable to logout');
        }
    };
    
    const logoutForm = (
        <form className="d-inline-block" onSubmit={handleLogout}>
            <button type="submit" className="nav-link logout-btn">Admin Logout</button>
        </form>
    );

    return (
        <>
            <nav className="navbar navbar-expand-lg py-2">
                <div className="container-fluid">
                    <Link className="navbar-brand ms-3" to="#">
                        <img src="https://static01.manyavar.com/uploads/images/manvayar-logo-icon-new.png" alt="Manayavar logo from nav" />
                    </Link>
                    <div className="d-lg-none fw-bold fs-2">Manyavar</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    auth.isLogin.login ?
                                    <Link className="nav-link" to="/scoreboard">Scoring</Link> :
                                    <Link className="nav-link" to="#">Link</Link>
                                }
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Disabled</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">About</Link>
                            </li>
                            <li className="nav-item">
                                {
                                    auth.isLogin.login ?
                                    logoutForm :
                                    <Link className="nav-link" to="/admin">Admin</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
            <footer className="footer container-fluid p-3">
                <div className="mx-auto text-center">
                    <span className="d-inline-block">No Copyrights Reserved</span>
                    <span className="d-inline-block px-2">@</span>
                    <small>{moment().format("MMMM Do YYYY")}</small>
                </div>
            </footer>
        </>
    );
}