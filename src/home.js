import axios from "axios";
import { useEffect, useState } from "react";
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import MCard from "./moviecard";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "./Store/action";

function Home(){
    const [movieData, setMovieData] = useState([])
   // const [pageNum,setPageNum] = useState(1)
    let pnum = useSelector((state)=>state.pageNum)
    const dispatchNum = useDispatch()
    const changeNum = (num) =>{
        dispatchNum(setPage(num))
        console.log(num)
      }
    
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87&page=${pnum}`)
        .then((movies)=>setMovieData(movies.data.results))
        .catch((er)=>console.log(er))
    }, [pnum])

    
    return(
        <>
        <CardGroup className="ms-3">
        {movieData.map((data)=>{
         return(
            <div  key={data.id}>
            <MCard Id={data.id} img={data.poster_path} title={data.title} vote={data.vote_average}/>
            </div>
         )
        })}
        </CardGroup>
        <div className="d-flex justify-content-center mb-4">
        <Button variant="outline-dark" onClick={() => changeNum(Math.max(1, pnum - 1))}>&lt;</Button>
        <span className="mx-3 text-dark my-2 fs-5 ">{pnum}</span>
        <Button variant="outline-dark" onClick={() => changeNum(++pnum)}>&gt;</Button>
        </div>
        </>
    );
}

export default Home;