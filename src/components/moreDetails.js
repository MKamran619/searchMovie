import React from "react";
import { Link } from "react-router-dom";


function moredetails(pros){

  return(

   <div className="detailtop">
    <div class="moredetails">

   <div className="dataimage">
       <img src={pros.img} alt="nothing" width="250px" height="400px" />
    </div>

    <div className="dataDetail">
    <div className="title">
    <h1>{pros.title}</h1>
    </div>
    <div className="indiviual">
      <p> Genre :  {pros.genre} </p>
    </div>
    <div className="indiviual">
    <p> Released : {pros.released} </p>
    </div>
    <div className="indiviual">
    <p>Rated : {pros.rated} </p>
    </div>
    <div className="indiviual">
    <p>IMDB Rating : {pros.rating} </p>
    </div>
    <div className="indiviual">
     <p> Director :  {pros.director} </p>
    </div>
    <div className="indiviual">
    <p>Writer :  {pros.writer} </p>
    </div>
    <div className="indiviual indiviualBottom">
    <p> Actors:  {pros.actor} </p>
    </div>

      </div>
     </div>
     <div className="about">
     <h2>About </h2>
      <p> {pros.about} </p>
      <button> view on IMDB </button>
      <Link to="/" style={{ textDecoration: 'none',color:'white' }}>Go Back To Search</Link>
        </div>

</div>

  )
}

export default moredetails;
