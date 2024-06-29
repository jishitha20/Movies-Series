import {use,useNavigate} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '@mui/material/Button';
import {useSelector} from "react-redux"
import Switch from "@mui/material/Switch"

import { addFavourite, deleteFavourite } from '../store/FavouritesSlice';
import { useDispatch } from 'react-redux';



function DetailMovie(props){
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const favourites = useSelector((state)=>state.fav.favourites) 
    const data = Object.values(favourites)
    
    console.log(favourites)
    const toggleFavorite = () => {
        if(!favourites[props.imdbID]){
            dispatch(addFavourite(props))
        }
        else{
            dispatch(deleteFavourite(props))
        }
      };

    return (
        <Card sx={{ maxWidth:345,
            position: 'absolute',
            top: '25%',
            left: '40%',
            }}>
            <CardMedia
                component="img"
                sx={{height: 240}}
                image={props.Poster}
                alt="Image of a product"
                title={props.Title} 
                
            />
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div">
                    Director: {props.Director}
                </Typography>
                <Typography component="div">
                   Release Date: {props.Released} 
                </Typography>
                <Typography  component="div">
                   Runtime: {props.Runtime}
                </Typography>
                <Typography component="div">
                    Genre: {props.Genre} 
                </Typography>
                <Typography component="div" >
                   imdbRating: {props.imdbRating} 
                </Typography>

                <Switch
                onClick={()=>toggleFavorite()}
                        checked= {favourites[props.imdbID]? true:false}
                />
                {/* <Button  onClick={()=>toggleFavorite()} >
                    <FavoriteBorderOutlinedIcon/>
                
              </Button> */}
              
              {/* {favourites[props.imdbID]? "A":"B"} */}
            </CardContent>
    </Card>
    )
}
export default DetailMovie;