import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { fetchMovieByimdbID } from '../lib/api';
import Movie from '../components/Movie';

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
          console.log('Cannot fetch the data' +e);
        }
      })()
      
    },[])
   
  return (
    <div>
      {
        movie &&
        <Movie 
            Title= {movie.Title} 
            Year= {movie.Year}
            Type= {movie.Type} 
            Poster={movie.Poster}  
            imdbID = {movie.imdbID}  
        />
      }
    </div>
  )
}

export default Show