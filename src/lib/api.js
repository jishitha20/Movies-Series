import axios from "axios";

const BASE_URL ="https://www.omdbapi.com/?apikey=8cbd8a50&";
//router.post('/login',catchAsync(async(req,res)=>{

export async function fetchMovies(req){
  //  const {title,year,type} = req.body;
    // const f={...obj};
    const res = await axios.get(`${BASE_URL}&s=${req.title}&y=${req.year}&type=${req.type}`);
     return res.data.Search;
  
   
}