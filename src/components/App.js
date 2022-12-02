import React, {useState,useEffect} from "react";
import Detail from "./movieDetail";


function App() {

  const [name, setName] = useState("");
  const [movieLink, setLink] = useState("")


  const [getData, setData] = useState([]);
  const [response, setResponse] = useState([]);



  function handleChange(event) {

    setName(event.target.value);

  }

  function handleClick(event) {
    let link = "https://www.omdbapi.com/?apikey=c951ff1&s=" + name;
    setLink(link)


    const fetchData = async () => {
      try {


          const response = await fetch(movieLink);
          const json = await response.json();
        setData(json.Search);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();

    event.preventDefault();
  }



                  return (

                   <div>
                     <div className = "container" >

                     <h1 > Search for a movies, TV series..  < /h1>

                     <form onSubmit = {handleClick} >
                     <input onChange = {handleChange} type = "text" placeholder = "Search for a movies, TV series .."
                     value = {name}/>
                     <button type = "submit" > Search < /button>
                     </form>
                     </div>

                     <div class="details">

                      { getData.map(newData =>

                          < Detail

                          title={newData.Title}
                          year={newData.Year}
                          img={newData.Poster}
                          linkId={newData.imdbID}
                            />

                       )
                     }

                      </div> </div>
                   )
}

export default App;
