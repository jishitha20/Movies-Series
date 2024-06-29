import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { fetchFavMovies, fetchMovies } from "../lib/api";
import { Box, Button ,Grid} from '@mui/material';
import { TextField } from '@mui/material';
import MovieList from "./MovieList";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {toast} from 'react-toastify';




const defaultTheme = createTheme();



const FavouriteSearch = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchData, setSearchData] = useState({})

  const handleFetchFavMovies = async(searchReqData)=>{
    
    const searchWith = searchReqData ?? searchData;
    if(!searchWith.title){
      return toast.error("Movies not found");
    }
    try{
        const movies = props.data.filter((item) =>
           item && item.Title.toLowerCase().includes(searchWith.title.toLowerCase())
        );
        if(movies.length===0)
           {
            setSearchResults([]);
            toast.error("No movies Found");
           } 
           else{
            setSearchResults(movies); 
           }
       
    }
    
    catch(err){
      setSearchResults([]);
      toast.error(err.message) 
    }
  }
  
  const handleSearchInputChanges = async(e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newReq = {
      title: data.get('title'),
      imdbID: data.get('imdbID'),
    }
    setSearchData(newReq)

    handleFetchFavMovies(newReq);
   
  }
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main"  >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
        <Box component="form" onSubmit={handleSearchInputChanges} noValidate sx={{ mt: 1 }}>

          <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="Movie title"
                name="title"
                autoComplete="title"
                autoFocus
              />
            <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                    <Button type="submit" >Search</Button>
                </Grid>
            </Grid>
          { searchResults  &&  <MovieList movies={searchResults}/>}
        
         
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
      
    );

}

export default FavouriteSearch;
