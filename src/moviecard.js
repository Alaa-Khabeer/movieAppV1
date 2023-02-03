import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import {add, save} from "./Store/action";
function MCard(props){
  const [favDone, setFavDone] = useState(false);
  let flag=false
  let favCount = useSelector((state)=>state.counter)
  const dispatchCount = useDispatch()
  const changeFav = () =>{
        dispatchCount(add(++favCount))
      }

  let favAdd = useSelector((state)=>state.added)
  const dispatchAdd = useDispatch()
  const changeAdd = ()=>{
    for(let i of favAdd){
      if(i === props.Id){
        flag=true
        favCount -=2
        favAdd.splice(favAdd.indexOf(i),1)
      }
    }
    if(flag === false){
    favAdd.push(props.Id)
    dispatchAdd(save(favAdd))
    }
  }

return(
    <Card style={{ width: '18rem' }} className="me-3 mb-4 position-relative">
      <Link to={`/details/${props.Id}`}>
      <span className="position-absolute top-0 start-50 translate-middle badge  bg-warning text-dark">
      {props.vote}
      </span>
      <Card.Img  src={`https://image.tmdb.org/t/p/w500/${props.img}`} />
      </Link> 
      <span className="text-warning position-absolute translate-middle fs-4 top-0 start-50 mt-4" onClick={() => changeFav()}><span onClick={()=>changeAdd()}>{<i className = {favDone? "fa-solid fa-heart":"fa-regular fa-heart"} onClick={()=>setFavDone(!favDone)}></i> }</span></span>
    </Card>
      
)
}
export default MCard;