import React, { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from 'axios';
import SideBar from './Components/SideBar';
import SearchBar from './Components/SearchBar';

const App = () => {
  

  return (
    <div className='flex'>
   
      {/* <p>{generatedText}</p> */}
      <SideBar/>
      <SearchBar/>
    </div>
  );
};

export default App;
