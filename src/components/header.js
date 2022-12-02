import React from 'react';
import { BiAtom } from "react-icons/fa";
import logo from './logo.svg';




function  Header(){
  return(

     <div className="header">
     <h1> MovieSeriesInfo </h1>
      <div className="logo">
   <img src={logo} className="App-logo" alt="logo" width="90px" />
   </div>
     </div>
)

}

export default Header;
