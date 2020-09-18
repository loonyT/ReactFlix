import React, {
    useState,
    useEffect
} from 'react';
import axios from './axios';

import requests from './requests';
import Banner from "./Banner";

function Banner() {


    const [movie, setMovie] = useState([]);

    useEffect {
        () => {

            async function fetchData() {
                const request = await axios.get(requests.fetchNetflixOriginal)
                setMovie(
                    Math.floor(Math.random() * request.data.results.length)
                }
            );
            return request;
        }
        fetchData();
    }, []);


return ({
        /*acting on the background top image */ } <
    header className = "banner"
    style = {
        {


            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/$(movie?.backdrop)) `,

            backgroundPosition: "center center",

        }
    }



    >

    <
    div className = "banner__contents" > {
        ""
    } {
        /* <<<Background image */ } {
        /*title */ } <
    h1 >


    {
        movie ? .title || movie ? .name || movie ? .original_name
    }

    <
    /h1>

    <
    div className = "banner__button" >

    <
    button className = "banner__button" > Play < /button> <
    button className = "banner__button" > My List < /button>

    <
    /div>


    <
    h1 className = "banner__description" > (movie ? .overview)


    <
    /h1>





    {
        /*div > 2 buttons */ } {
        /* description */ } <
    /div> <
    /header>

)

}

export default Banner