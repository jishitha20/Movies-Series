import React, { useEffect, useState } from "react";
import { fetchMovies } from "../lib/api";
import { Box, Button } from '@mui/material';
import { TextField ,Grid} from '@mui/material';
import MovieList from "./MovieList";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Pagination from '@mui/material/Pagination';
import {toast} from 'react-toastify';

const defaultTheme = createTheme();

const SearchComponent = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [searchData, setSearchData] = useState({})

  const handleFetchMovies = async(searchReqData, pageNumber)=>{
    
    const searchWith = searchReqData ?? searchData;
    try{
      const movies = await fetchMovies({...searchWith,page:pageNumber});
      setSearchResults(movies);       
    }
    catch(err){
      setSearchResults([]); 
      toast.error(err.message);
    }
  }
  
  const handleSearchInputChanges = async(e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const newReq = {
      title: data.get('title'),
      type: data.get('type'),
      year: data.get('year'),
      imdbID: data.get('imdbID'),
      page:page
    }
    setSearchData(newReq)
    handleFetchMovies(newReq,page);
    }
  
  
  const [page, setPage] = React.useState(1);
  const handleChange = (event,value) => {
    handleFetchMovies(undefined,value)
    setPage(value);
   
  };

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
        <Box component="form" onSubmit={handleSearchInputChanges} noValidate sx={{ mt: 1,maxwidth:"lg" }}>
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
              autoComplete="year"
              autoFocus
            />
          <Grid container justifyContent="center" spacing={2}>
              <Grid item>
                  <Button type="submit" >Search</Button>
              </Grid>
          </Grid>
            
          { searchResults && page &&  <MovieList movies={searchResults}/>}
          { searchResults && <Pagination count={10} shape="rounded" 
            page={page} onChange={handleChange} sx={{m:3}} />} 
         
        </Box>
      </Box>
    </Container>
  </ThemeProvider>  
  );
}

export default SearchComponent;