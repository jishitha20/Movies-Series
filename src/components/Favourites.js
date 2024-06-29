import React from 'react';
import {useSelector} from "react-redux"
import MovieList from './MovieList';
import FavouriteSearch from './FavouriteSearch';

const Favourites = () => {

    const favourites = useSelector((state)=>state.fav.favourites) 
    const data = Object.values(favourites);
    
    if(data.length===0)
    return <h2>Favourites is empty</h2>

    return(
        <div>
            <FavouriteSearch data={data}/>
            <MovieList  movies={data}/>
        </div>
        
    )
}

export default Favourites;