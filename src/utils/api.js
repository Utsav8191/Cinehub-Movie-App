// Importing axios library
import axios from "axios";

const BASE_URL="https://api.themoviedb.org/3";

// This method of importing from env is specific to VITE 
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}

export const fetchDataFromApi = async (url, params)=>{
    try {

        // Axios takes two arguements, 1.URL 2.Options(configurations)
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params,
        })
        return data;
    } catch(err){
        console.log(err);
        return err;
    }
}