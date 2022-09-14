import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@styles/global.scss';
import Layout from '@containers/Layout';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import AppContext from '@context/AppContext';

const App = () => {
  return (

      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>

  )
}

export default App