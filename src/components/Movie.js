import {use, useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



function Movie(props){
    const {imdbID} = useParams();
    const navigate = useNavigate();

    const goToMovieHandler=()=>{
        navigate(`/${props.imdbID}`)
    }

    return (
    <Card  onClick={goToMovieHandler} sx={{ maxWidth:345 }}>
        <CardMedia
            component="img"
            sx={{ height: 140 }}
            image={props.Poster}
            alt="Image of a product"
            title={props.Title} 
                
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div">
                Year: {props.Year}
            </Typography>
            <Typography component="div">
                Type : {props.Type} 
            </Typography>
        </CardContent>
    </Card>
    )
   
}
export default Movie;