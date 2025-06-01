import { useState } from 'react'
import "@fontsource/poppins";
import "./App.css"; 

import Sidebar from './components/Sidebar';
import Content from './components/Content';

export default function App(){
  return(
    <div className='container-fluid'>
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">
          <Content />
        </div>
      </div>
    </div>
  );
}