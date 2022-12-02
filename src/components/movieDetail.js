import React, {useState} from "react";
import { Link } from "react-router-dom";

function Details(pros){

   return(
        <div className="detailsComponent">

           <img src={pros.img} alt="nothing" width="170px" height="200px" />
           <p>{pros.title}   </p>
           <p> {pros.year}   </p>
          <button>
          <Link to="movie" style={{ textDecoration: 'none',color:'white' }}
           state={{ from: pros.linkId}}> Movie Details</Link> </button>

           </div>
         )
}

export default Details;
