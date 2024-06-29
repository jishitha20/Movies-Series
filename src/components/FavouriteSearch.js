import React, { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { fetchFavMovies, fetchMovies } from "../lib/api";
import { Box, Button ,Grid} from '@mui/material';
import { TextField } from '@mui/material';
import MovieList from "./MovieList";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Pagination from '@mui/material/Pagination';



const defaultTheme = createTheme();



const FavouriteSearch = (props) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchData, setSearchData] = useState({})

  const handleFetchFavMovies = async(pageNumber)=>{
    
    try{
        const movies = props.data.filter((item) =>
            item.Title.toLowerCase().includes(searchData.title.toLowerCase())

          );
        if(movies.length===0)
           {
                console.log("No data")
                return <h2>Favourites is empty</h2>
           } 
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
      imdbID: data.get('imdbID'),
      page:page
    }
    setSearchData(newReq)

    handleFetchFavMovies(page);
   
  }
  
  
  const [page, setPage] = React.useState(1);
  const handleChange = (event,value) => {
    handleFetchFavMovies(value)
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

export default FavouriteSearch;
