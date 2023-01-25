import {BrowserRouter, Route, Routes} from 'react-router-dom'

/* HEADER FOOTER */
import Layout from './components/layout/Layout';

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Questions from './pages/questions/Questions';
import Finished from './pages/finished/Finished';

import Loader from './components/loader/Loader';

const Router = () => {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>

        <>
        <Layout />
          <Routes>
              <Route path="/dashboard" element={<Dashboard />} /> 
              <Route path="/question-1" element={<Questions />} />
              <Route path="/finished" element={<Finished />} />
              <Route path="/loader" element={<Loader />} />
          </Routes>

        </>
    </BrowserRouter>
  )
}

export default Router;