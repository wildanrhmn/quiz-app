import {BrowserRouter, Route, Routes} from 'react-router-dom'

/* HEADER FOOTER */
import Header from './components/header/header';
import Footer from './components/footer/Footer'

import Dashboard from './pages/dashboard/Dashboard';
import Questions from './pages/questions/Questions';
import Finished from './pages/finished/Finished';

const Router = () => {
 
  return (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Dashboard />} /> 
            <Route path="/question-1" element={<Questions />} />
            <Route path="/finished" element={<Finished />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default Router;