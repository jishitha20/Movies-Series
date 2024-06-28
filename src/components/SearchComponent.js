import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { fetchMovies } from "../lib/api";
import { Box, Button } from '@mui/material';
import { TextField } from '@mui/material';
import MovieList from "./MovieList";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import {use, useNavigate} from 'react-router-dom';


const defaultTheme = createTheme();



const SearchComponent = () => {

  const [searchTerm, setSearchTerm] = useState([]);
  const navigate = useNavigate();
  
  const handleSearchInputChanges = async(e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newReq = {
      title: data.get('title'),
      type: data.get('type'),
      year: data.get('year'),
      imdbID: data.get('imdbID'),
    }
    try{
      const movies = await fetchMovies(newReq);
      setSearchTerm(()=>{
        return movies;
      }); 
      
    }
    catch(err){
     console.log(err)
    }

   
  //  resetSearchField();
  }
  
  const resetSearchField = () => {
    setSearchTerm("");
  }

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
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
                
            <TextField
                margin="normal"
                fullWidth
                id="type"
                label="type"
                name="type"
                autoComplete="type"
                autoFocus
              />  
            <TextField
              margin="normal"
              fullWidth
              name="year"
              label="year"
              type="year"
              id="year"
              autoComplete="current-password"
            />
            <Button type="submit" component="" to=""><SearchIcon /></Button>
            
          { searchTerm && <MovieList movies={searchTerm}/>}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
      
    );

}

export default SearchComponent;
