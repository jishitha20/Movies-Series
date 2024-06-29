import React from 'react';
import {useSelector} from "react-redux"
import MovieList from './MovieList';

const Favourites = () => {

    const favourites = useSelector((state)=>state.fav.favourites) 
    const data = Object.values(favourites);

    
    if(data.length===0)
    return <h2>Favourites is empty</h2>

    //console.log(favourites);
    return(
        <MovieList  movies={data}/>
        
    )
}

export default Favourites;