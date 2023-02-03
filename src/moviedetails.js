import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './details.css';

function Details(){
    const ID = useParams()
    const [movie, setMovie] = useState({})
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${ID.id}?api_key=9b743af1d4fde1d65af33c40dcccce87`)
        .then((details)=>{
           setMovie(details.data)
        })
        .catch((er)=>{
            console.log(er)
        })
    }, [])
    return(
        <div className="d-flex justify-content-center">
        <div className="Img">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="w-100"/>
        </div>
        <div className="txt col-4 ms-5">
        <p className="tit">{movie.title}</p>
        <p className="lead">{movie.overview}</p> 
        <p className="lead"><span className=" fw-bold">Release date:</span> {movie.release_date}</p>
        <p className="lead"><span className=" fw-bold">Rate:</span>  {movie.vote_average}</p>
        </div>
        </div>
    )
}
export default Details;