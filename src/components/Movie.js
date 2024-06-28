import Button from '@mui/material/Button';




function Movie(props){

    return <figure >
        <img width="200px"src={props.image}/>
        <h2>{props.title}</h2>
        <h3>${props.price}</h3>
        <p>{props.description.substring(0,50)}</p>
        <Button  variant="outlined">Add To Favourites</Button>

    </figure>
}
export default Movie;