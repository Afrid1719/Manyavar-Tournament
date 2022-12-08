import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import {createContext, useEffect, useState} from 'react';
import Scoring from './pages/Scoring/Scoring';
import './App.scss';

export const AuthContext = createContext({});

function App() {
  let [isLogin, setIsLogin] = useState({login: false, token: null});
  const auth = {
    isLogin,
    login: function(value) {
      const obj = {login: true, token: value};
      setIsLogin(obj);
      localStorage.setItem('admin', JSON.stringify(obj));
    },
    logout: function() {
      setIsLogin({login: true, token: null});
      localStorage.clear();
    }
  };

  useEffect(() => {
    const admin = localStorage.getItem('admin');
    if (!!admin) {
      const {token} = JSON.parse(admin);
      setIsLogin({login: true, token: token});
    }
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <Routes>
            <Route exact path="/admin" element={<Admin />} />
            <Route path="/" element={<Layout />}>
              <Route index exact path="" element={<Home />} />
              <Route path="scoring" element={<Scoring />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;