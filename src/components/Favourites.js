import React from 'react';
import {useSelector} from "react-redux"
import MovieList from './MovieList';

const Favourites = () => {

    const favourites = useSelector((state)=>state.fav.favourites) // Read data from store
    const data = Object.values(favourites);
    //console.log(favourites);
    return(
        <MovieList  movies={data}/>
        
    )
}

export default Favourites;