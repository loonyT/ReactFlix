import axios from "axios"; //used one of the installed module 
//make requests to the movie database 
const instance = axios.create({

    baseURL: "https://api.themoviedb.org/3",
});


//the url we are sending to is the following one : https://api.themoviedb.org/3/foo-bar

export default instance;