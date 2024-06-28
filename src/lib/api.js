import axios from "axios";

const BASE_URL ="https://www.omdbapi.com/?apikey=8cbd8a50&";

export async function fetchMovies(req){
  //  const {title,year,type} = req.body;
    // const f={...obj};
    const res = await axios.get(`${BASE_URL}&s=${req.title}&y=${req.year}&type=${req.type}`);
     return res.data.Search;
  
   
}

export async function fetchMovieByimdbID(req)  {
    const res = await axios.get(`${BASE_URL}&i=${req}`);
   console.log(res)
    return res.data;
}