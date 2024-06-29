import axios from "axios";

const BASE_URL ="https://www.omdbapi.com/?apikey=8cbd8a50&";

export async function fetchMovies(req){
   
    let url = BASE_URL;
    if(req.title)
        url+=`&s=${req.title}`
    if(req.year)
        url+=`&y=${req.year}`
    if(req.type)
        url+=`&type=${req.type}`
    if(req.page)
        url+=`&page=${req.page}`
    const res = await axios.get(url);
    if(!res.data.Search){
        throw new Error("Movie not Found");
    }
    if (res.status !== 200) {
        throw new Error('API Error');
    }
     return res.data.Search;
   
}


export async function fetchMovieByimdbID(req)  {
    const res = await axios.get(`${BASE_URL}&i=${req}`);
   if(!res.data){
    throw new Error("Movie not Found");
}
   if (res.status !== 200) {
    throw new Error('API Error');
}
    return res.data;
}