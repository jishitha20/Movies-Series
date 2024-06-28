import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { fetchMovies } from "../lib/api";
import { Box, Button } from '@mui/material';
import { TextField } from '@mui/material';
import MovieList from "./MovieList";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const defaultTheme = createTheme();



const SearchComponent = () => {

  //const [searchTerm, setSearchTerm] = useState("");
  
  const handleSearchInputChanges = async(e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newReq = {
      title: data.get('title'),
      type: data.get('type'),
      year: data.get('year'),
    }
    try{
      const movies = await fetchMovies(newReq);
      <MovieList data={movies}/>
    }
    catch(err){
     console.log(err)
    }
   // resetSearchField();
  }
  
  const resetSearchField = () => {
   // setSearchTerm("");
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    //console.log(fetchMovies(searchTerm));
    <MovieList data={fetchMovies()}/>
    resetSearchField();
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
            <Button type="submit"><SearchIcon /></Button>
            
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
      
    );

}

export default SearchComponent;