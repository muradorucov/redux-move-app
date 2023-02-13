import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/main';
import { ListPage } from './pages/listpage';
import { ListPageDetail } from './pages/listdetail';
// import { NotFound } from './pages/notfound';
import { MovieDetail } from './pages/moviedetail';

import './reset.css';
import './common.css';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lists" element={<ListPage />} />
        <Route path="/listdetail/:id" element={<ListPageDetail />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        {/* <Route path="/*" element={< NotFound />} /> */}
      </Routes>
    </div>
  )
}

export default App


