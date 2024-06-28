import {use, useNavigate} from 'react-router-dom';
import {useParams} from 'react-router-dom';



function Movie(props){
    const {imdbID} = useParams();
    const navigate = useNavigate();

    const goToMovieHandler=()=>{
        console.log(props)
        navigate(`/${props.imdbID}`)
    }

    return <figure onClick={goToMovieHandler} >
        <img width="200px"src={props.image}/>
        <h2>{props.Title}</h2>
        <h3>{props.Year}</h3>
        <p>{props.Type}</p>
        <img width="200px"src={props.Poster}/>
        <p>{props.imdbID}</p>
    </figure>
}
export default Movie;