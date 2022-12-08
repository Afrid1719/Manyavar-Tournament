import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import {createContext, useState} from 'react';
import Scoring from './pages/Scoring/Scoring';
import './App.scss';

export const AuthContext = createContext({});

function App() {
  let [isLogin, setIsLogin] = useState({login: false, token: null});
  const auth = {
    isLogin,
    login: function(value) {
      setIsLogin({login: true, token: value});
    },
    logout: function() {
      setIsLogin({login: true, token: null});
    }
  };

  return (
    <AuthContext.Provider value={auth}>
      <BrowserRouter>
        <Routes>
            <Route exact path="/admin" element={<Admin />} />
            <Route path="/" element={<Layout />}>
              <Route index exact path="" element={<Home />} />
              <Route path="scoreboard" element={<Scoring />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;