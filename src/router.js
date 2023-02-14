import {BrowserRouter, Route, Routes} from 'react-router-dom'

/* HEADER FOOTER */
import Layout from './components/layout/Layout';

import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Questions from './pages/questions/Questions';
import Finished from './pages/finished/Finished';

import { scoreContext } from './states/Score';

import Loader from './components/loader/Loader';
import React, { useState } from 'react';

const Router = () => {

  const [score, setScore] = useState(0)

  return (
    <BrowserRouter>
        <Layout />
          <scoreContext.Provider value={{score, setScore}}>
        <Routes>
              <Route path='/' element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} /> 
              <Route path="/question-1" element={<Questions />} />
              <Route path="/finished" element={<Finished />} />
              <Route path="/loader" element={<Loader />} />
          </Routes>
          </scoreContext.Provider>


    </BrowserRouter>
  )
}

export default Router;