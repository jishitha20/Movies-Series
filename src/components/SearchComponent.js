import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { fetchMovies } from "../lib/api";
import { Box, Button } from '@mui/material';
import { TextField } from '@mui/material';
import MovieList from "./MovieList";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Pagination from '@mui/material/Pagination';



const defaultTheme = createTheme();



const SearchComponent = () => {

  const [searchResults, setSearchResults] = useState([]);
  const [searchData, setSearchData] = useState({})
  const [favourites,setFavourites] = useState({})


  const handleAddFavourites = (data) =>{
     const updatedData  = {[data.id]:data}
     setFavourites((prev)=>({...prev,updatedData}))
  }


  const handleFetchMovies = async(pageNumber)=>{
    
    try{
      const movies = await fetchMovies({...searchData,page:pageNumber});
      setSearchResults(movies);       
    }
    catch(err){
     console.log(err)
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
    console.log(newReq)
    setSearchData(newReq)

    handleFetchMovies(page);
   
  //  resetSearchField();
  }
  
  const resetSearchField = () => {
    searchResults("");
  }
  const [page, setPage] = React.useState(1);
  const handleChange = (event,value) => {
    handleFetchMovies(value)
    setPage(value);
   
  };

  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth= "xs" >
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
              autoComplete="current-password"
            />
            <Button type="submit" ><SearchIcon /></Button>
            { searchResults && <Pagination count={10} shape="rounded" 
          page={page} onChange={handleChange} />}
            
          { searchResults && page &&  <MovieList movies={searchResults}/>}
         
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    
      
    );

}

export default SearchComponent;
