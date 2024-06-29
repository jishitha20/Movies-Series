import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Movie from './Movie';



const MovieList = (props) => {
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
                    {
                        props.movies.map(function (movie) {
                            return(
                                <Grid item xs={2} sm={4} md={4}  >
                                        <Movie
                                            Title= {movie.Title} 
                                            Year= {movie.Year}
                                            Type= {movie.Type} 
                                            Poster={movie.Poster}  
                                            imdbID = {movie.imdbID}
                                                                                  
                                        />
                                </Grid>
                            )    
                        }) 
                    }  
            </Grid>
        </Box> 
    )
}
export default MovieList;
