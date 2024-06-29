import React, { useContext, useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import { fetchMovieByimdbID } from '../lib/api';
import DetailMovie from '../components/DetailMovie';
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Show = () => {
    const {imdbID} = useParams();
    const [movie,setMovie] = useState(null);

    useEffect(()=>{
      (async()=>{
        try{
          const data =  await fetchMovieByimdbID(imdbID);
          setMovie(data);
        }
        catch(e){
          toast.error(e.message);
        }
      })()
      
    },[])
   
  return (
    <div>
      {
        movie &&
        <DetailMovie 
            Title= {movie.Title} 
            Year= {movie.Year}
            Type= {movie.Type} 
            Poster={movie.Poster}  
            imdbID = {movie.imdbID} 
            Released={movie.Released}  
            Runtime = {movie.Runtime} 
            Genre={movie.Genre}  
            imdbRating = {movie.imdbRating}  
            Director={movie.Director}
        />
        }
    </div>
  )
}

export default Show