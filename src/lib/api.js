import axios from "axios";

const BASE_URL ="https://www.omdbapi.com/?apikey=8cbd8a50&";

export async function fetchMovies(req){
    //console.log(req,"Req")
  //  const {title,year,type} = req.body;
    // const f={...obj};
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
     return res.data.Search;
  
   
}

export async function fetchMovieByimdbID(req)  {
    const res = await axios.get(`${BASE_URL}&i=${req}`);
   console.log(res)
    return res.data;
}