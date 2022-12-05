import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import {useState} from 'react';
import './App.scss';

function App() {
  let [isLoggedIn, setIsLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/admin" element={<Admin isLogin={isLoggedIn} setIsLogin={setIsLogin} />} />
          <Route path="/" element={<Layout />}>
            <Route index exact path="" element={<Home />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;