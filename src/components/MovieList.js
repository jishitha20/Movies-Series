import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Movie from './Movie';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
  }));
  

const MovieList = (props) => {
    console.log(props)
    return(
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}> 
                    {
                        props.movies.map(function (movie) {
                            return(
                                <Grid item xs={12} md={6} lg={4}  >
                                    <Item>
                                        <Movie
                                            Title= {movie.Title} 
                                            Year= {movie.Year}
                                            Type= {movie.Type} 
                                            Poster={movie.Poster}  
                                            imdbID = {movie.imdbID}                                        
                                        />
                                    </Item>
                                </Grid>
                            )    
                        }) 
                    }  
            </Grid>
        </Box> 
    )
}
export default MovieList;
