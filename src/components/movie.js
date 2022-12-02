import React, {useState} from "react";
import MoreD from "./moreDetails";
import { useLocation } from 'react-router-dom'


function Movie(pros){

  const [getData, setData] = useState([]);

  const location = useLocation();
  const { from } = location.state;

   let link = "https://www.omdbapi.com/?apikey=c951ff1&i="+ from;

   const fetchData = async () => {
     try {
         const response = await fetch(link);
         const json = await response.json();
         setData(json);

         }   catch (error) {
              console.log("error" + error)
        }
   }
   fetchData();


               return (
                 < MoreD
                  img={getData.Poster}
                  title={getData.Title}
                  genre={getData.Genre}
                  released={getData.Released}
                  rated={getData.Rated}
                  rating={"7.3"}
                  director={getData.Director}
                  writer={getData.Writer}
                  actor={getData.Actors}
                  about={getData.Plot}
                   />
               )
}

export default Movie;
