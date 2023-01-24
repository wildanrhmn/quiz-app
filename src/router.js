import {BrowserRouter, Route, Routes} from 'react-router-dom'

/* HEADER FOOTER */
import Header from './components/header/header';
import Footer from './components/footer/Footer'

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Questions from './pages/questions/Questions';
import Finished from './pages/finished/Finished';

const Router = () => {
 
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>

        <>
    
          <Routes>
              <Route element={<Header />} />
              <Route path="/dashboard" element={<Dashboard />} /> 
              <Route path="/question-1" element={<Questions />} />
              <Route path="/finished" element={<Finished />} />
          </Routes>

        </>
    </BrowserRouter>
  )
}

export default Router;