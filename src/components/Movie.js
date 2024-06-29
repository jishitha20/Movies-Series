import {use, useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



function Movie(props){
    const navigate = useNavigate();

    const goToMovieHandler=()=>{
        navigate(`/${props.imdbID}`)
    }

    return (
    <Card  onClick={goToMovieHandler} sx={{ 
        width: '30vw',
        top: '25%', 
        m:2,
        display: 'block',
        transitionDuration: '0.3s',
        height: '30vw'}}>
        <CardMedia
            component="img"
            sx={{ height: 250,objectFit: 'cover'}}
            image={props.Poster}
            alt="Image of a product"
            title={props.Title} 
                            
        />
        <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div">
                Title: {props.Title}
            </Typography>
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