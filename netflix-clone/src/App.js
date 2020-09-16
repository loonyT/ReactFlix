import React from 'react';
import './App.css';
import Row from './Row';
import requests from



function App() {
    return ( <
        div className = "App" >
        <
        h1 >
        let 's build a netflix clone with react fellows !</h1> <
        Row title = "NETFLIX ORIGINALS"
        fetchUrl = {
            requests.fetchNetflixOriginals
        }
        />  <
        Row title = "Trending now"
        fetchUrl = {
            requests.fetchTrending
        }
        /> <
        Row title = "Top Rated"
        fetchUrl = {
            requests.fetchTopRated
        }
        /> <
        Row title = "Action movies"
        fetchUrl = {
            requests.fetchActionMovies
        }
        /> <
        Row title = "Comedy movies"
        fetchUrl = {
            requests.fetchComedyMovies
        }
        /> <
        Row title = "Horror movies"
        fetchUrl = {
            requests.fetchHorrorMovies
        }
        /> <
        Row title = "Romance movies"
        fetchUrl = {
            requests.fetchRomanceMovies
        }
        /> <
        Row title = "Documentaries"
        fetchUrl = {
            requests.fetchDocumentaries
        }
        /> <
        /div>
    );
}



export default App;