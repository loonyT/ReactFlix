import React, {
    useState,
    useEffect
} from 'react';
import axios from './axios';
import './Row.css';

//here above, we are clearly seeing the advantage of working with componants



//base url for poster path => 
const base_url = "https://image.tmdb.org/t/p/original/";


function Row({
    title,
    fetchUrl,
    isLargeRow
}) {


    const [movies, setMovies] = useState([]);

    //with the const variable, we have an empty movies array and now we have to fill it
    //a snippet of code which runs based on a specific condition or variable 

    useEffect(() => {
        // run a piece of code when the Row is loading. I make a request to TMDB.
        // if we leave the bracket blank : run once when tu row loads and dont run again 
        //asynchronous call to a request to a third party service 


        async function fetchData() {


            //when you make this request, wait for the promise to come back

            const request = await axios.get(fetchUrl);
            // "https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213", 
            //with this we can thus see the data structure that we are getting back and those datas are stored in data.results
            setMovies(request.data.results);
            return request;
        }


        fetchData();


    }, [fetchUrl]); //its dependend on that variable so you have to include it here 
    //we have to dos this (telling user effect) because fetchUrl is passed first outside of the block 


    console.log(movies);



    return (

        <
        div className = "row" >

        {
            /*title */
        }

        <
        h2 > {
            title
        } < /h2> 

        <
        div className = "row__posters" >

        {
            /* several row__posters(s) */
        } {
            movies.map(movie => (

                <
                img
                /* here, this is a react property which is being used : react render just what is needs to render and not the hole thing*/
                key = {
                    movie
                }
                className = {
                    `row__poster ${isLargeRow && "row_posterLarge"}`
                }
                src = {
                    `${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path }`
                }
                alt = {
                    movie.name
                }
                />
                //beware because poster_path is not an URL 
            ))
        } <
        /div>  <
        /div>
    );
}
export default Row