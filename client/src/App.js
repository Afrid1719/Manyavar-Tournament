import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import {useState} from 'react';
import Scoring from './pages/Scoring/Scoring';

function App() {
  let [isLoggedIn, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/admin" element={<Login isLogin={isLoggedIn} setIsLogin={setIsLogin} />} />
          <Route path="/" element={<Layout />}>
            <Route index exact path="" element={<Home />} />
            <Route path="scoreboard" element={<Scoring />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;