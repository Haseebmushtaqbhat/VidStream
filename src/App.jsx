import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video';

const App = () => {
const [sidebar,setSidebar]=useState(true)


  return (
    <BrowserRouter>
      <div>
        <Navbar setSidebar={setSidebar} />
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar}/>} />
          <Route path='/video/:categoryId/:videoId' element={<Video />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
